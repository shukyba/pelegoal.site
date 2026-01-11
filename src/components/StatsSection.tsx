'use client';

import { useEffect, useRef, useState } from 'react';

// Animated counter hook
function useCountUp(end: number, duration: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return count;
}

// Progress bar metric component
function ProgressMetric({
  label,
  percentage,
  description,
  isVisible,
  index
}: {
  label: string;
  percentage: number;
  description: string;
  isVisible: boolean;
  index: number;
}) {
  const animatedPercentage = useCountUp(percentage, 10000, isVisible); // 10 seconds

  return (
    <div style={{
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: 'var(--radius)',
      border: '1px solid rgba(156, 116, 244, 0.15)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{label}</span>
        <span style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#c084fc',
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.3s ease-out ${index * 0.1}s`
        }}>
          {animatedPercentage}%
        </span>
      </div>
      <div style={{
        height: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '12px'
      }}>
        <div 
          style={{
            height: '100%',
            width: `${animatedPercentage}%`,
            background: 'linear-gradient(90deg, #9c74f4 0%, #d946ef 100%)',
            borderRadius: '5px'
          }}
        />
      </div>
      <p style={{
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.5)',
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );
}

// Individual stat counter component
function StatCounter({ 
  value, 
  suffix, 
  label, 
  icon, 
  isVisible, 
  index 
}: { 
  value: number; 
  suffix: string; 
  label: string; 
  icon: React.ReactNode; 
  isVisible: boolean; 
  index: number;
}) {
  const count = useCountUp(value, 10000, isVisible); // 10 seconds

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div 
      style={{
        padding: '30px 20px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--radius)',
        border: '1px solid rgba(156, 116, 244, 0.2)'
      }}
    >
      <div style={{ 
        color: '#9c74f4',
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div 
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '8px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
        }}
      >
        {formatNumber(count)}{suffix}
      </div>
      <div style={{
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '500'
      }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      value: 2400000, 
      suffix: '+',
      label: 'Searches Performed',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      )
    },
    { 
      value: 8700000, 
      suffix: '+',
      label: 'Leads Discovered',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      value: 1200000, 
      suffix: '+',
      label: 'Messages Delivered',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
        </svg>
      )
    }
  ];

  const metrics = [
    { label: 'Time Saved', percentage: 85, description: 'Less time spent on manual prospecting' },
    { label: 'Response Rate Increase', percentage: 73, description: 'Higher engagement vs. generic outreach' },
    { label: 'User Satisfaction', percentage: 97, description: 'Users recommend PeleGoal' }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
        color: 'white',
        padding: 'clamp(60px, 12vw, 100px) 0'
      }}
    >
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 'bold'
        }}>
          Powering Business Growth
        </h2>
        
        {/* Big Numbers Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          {stats.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isVisible={isVisible}
              index={i}
            />
          ))}
        </div>

        {/* Progress Bars Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {metrics.map((metric, i) => (
            <ProgressMetric
              key={i}
              label={metric.label}
              percentage={metric.percentage}
              description={metric.description}
              isVisible={isVisible}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
