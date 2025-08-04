import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string
    speed?: number
    revealDirection?: 'start' | 'end' | 'center' | 'wave' | 'random'
    className?: string
    parentClassName?: string
    animateOn?: 'view' | 'hover' | 'load'
    glowEffect?: boolean
    particleEffect?: boolean
}

export default function DecryptedText({
    text,
    speed = 2, // Reduced from 5 to 2 for faster animation
    revealDirection = 'wave',
    className = '',
    parentClassName = '',
    animateOn = 'view',
    glowEffect = true,
    particleEffect = true,
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [hasAnimated, setHasAnimated] = useState<boolean>(false)
    const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([])
    const containerRef = useRef<HTMLSpanElement>(null)

    // Cool animation characters for the scramble effect
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    // Generate particle positions for the glow effect
    useEffect(() => {
        if (particleEffect && isAnimating) {
            const newParticles = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            }))
            setParticles(newParticles)
        }
    }, [isAnimating, particleEffect])

    // Main animation effect
    useEffect(() => {
        if (!isAnimating) {
            setDisplayText(text)
            return
        }

        let currentIndex = 0

        const getRevealOrder = () => {
            const indices = Array.from({ length: text.length }, (_, i) => i)
            switch (revealDirection) {
                case 'start':
                    return indices
                case 'end':
                    return indices.reverse()
                case 'center': {
                    const middle = Math.floor(text.length / 2)
                    const left = indices.slice(0, middle).reverse()
                    const right = indices.slice(middle)
                    return [middle, ...left, ...right]
                }
                case 'wave':
                    return indices.sort((a, b) => {
                        const waveA = Math.sin(a * 0.3) * 10 + a
                        const waveB = Math.sin(b * 0.3) * 10 + b
                        return waveA - waveB
                    })
                case 'random':
                    return indices.sort(() => Math.random() - 0.5)
                default:
                    return indices
            }
        }

        const revealOrder = getRevealOrder()
        let currentText = text.split('').map(() => ' ')
        setDisplayText(currentText.join(''))

        // Scramble effect
        const scrambleInterval = setInterval(() => {
            currentText = currentText.map((char, i) => {
                if (revealOrder.includes(i) && revealOrder.indexOf(i) <= currentIndex) {
                    return text[i]
                }
                if (char === ' ') return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
                return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            })
            setDisplayText(currentText.join(''))
        }, speed)

        // Reveal effect
        const revealInterval = setInterval(() => {
            if (currentIndex < text.length) {
                currentText[revealOrder[currentIndex]] = text[revealOrder[currentIndex]]
                setDisplayText(currentText.join(''))
                currentIndex++
            } else {
                clearInterval(scrambleInterval)
                clearInterval(revealInterval)
                setIsAnimating(false)
                setDisplayText(text)
            }
        }, speed) // Reduced from speed * 2 to speed for faster reveal

        return () => {
            if (scrambleInterval) clearInterval(scrambleInterval)
            if (revealInterval) clearInterval(revealInterval)
        }
    }, [isAnimating, text, speed, revealDirection])

    // Particle animation
    useEffect(() => {
        if (!particleEffect || !isAnimating) return

        const particleInterval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: particle.x + particle.vx,
                y: particle.y + particle.vy,
                vx: particle.x > 100 || particle.x < 0 ? -particle.vx : particle.vx,
                vy: particle.y > 100 || particle.y < 0 ? -particle.vy : particle.vy
            })))
        }, 30) // Reduced from 50ms to 30ms for snappier particle movement

        return () => clearInterval(particleInterval)
    }, [particleEffect, isAnimating])

    useEffect(() => {
        if (animateOn === 'load') {
            setIsAnimating(true)
            setHasAnimated(true)
            return
        }

        if (animateOn !== 'view') return

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsAnimating(true)
                    setHasAnimated(true)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const currentRef = containerRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [animateOn, hasAnimated])

    const hoverProps =
        animateOn === 'hover'
            ? {
                onMouseEnter: () => setIsAnimating(true),
                onMouseLeave: () => setIsAnimating(false),
            }
            : {}

    return (
        <motion.span
            ref={containerRef}
            className={`inline-block whitespace-pre-wrap relative ${parentClassName}`}
            {...hoverProps}
            {...props}
        >
            {/* Particle effect overlay */}
            {particleEffect && isAnimating && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                filter: 'blur(1px)',
                            }}
                            animate={{
                                scale: [0.5, 1, 0.5],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 1, // Reduced from 2 to 1 for faster particle animation
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Main text with glow effect */}
            <span 
                className={`relative z-10 ${glowEffect && isAnimating ? 'animate-pulse' : ''}`}
                style={{
                    textShadow: glowEffect && isAnimating 
                        ? '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)' 
                        : 'none'
                }}
            >
                {displayText.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        className={`inline-block ${className}`}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }} // Slightly less movement for snappier effect
                        animate={isAnimating ? { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1,
                            color: char === ' ' ? 'transparent' : 'inherit'
                        } : { opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.15, // Reduced from 0.3 to 0.15 for faster character animation
                            delay: index * 0.025, // Reduced from 0.05 to 0.025 for faster stagger
                            ease: "easeOut"
                        }}
                        style={{
                            transform: isAnimating ? `rotateY(${Math.random() * 10 - 5}deg)` : 'none'
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
        </motion.span>
    )
}
