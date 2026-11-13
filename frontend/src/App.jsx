import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Lock,
  LineChart,
  PieChart,
  Users,
  Building,
  Activity,
  AlertCircle
} from 'lucide-react';

export default function App() {
  // Navigation & Modal State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('signup'); // 'signup' or 'demo'
  const [submittedForm, setSubmittedForm] = useState(false);
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' or 'annual'

  // Interactive Scenario on Hero
  const [heroScenario, setHeroScenario] = useState('base'); // 'conservative', 'base', 'growth'

  // Interactive Runway Simulator State
  const [cashBalance, setCashBalance] = useState(250000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(35000);
  const [monthlyBurn, setMonthlyBurn] = useState(52000);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form input state in Modal
  const [formEmail, setFormEmail] = useState('');
  const [formName, setFormName] = useState('');

  // Calculations for Simulator
  const netBurn = monthlyBurn - monthlyRevenue;
  const runwayMonths = useMemo(() => {
    if (netBurn <= 0) return 'Profitable (Infinite)';
    const months = (cashBalance / netBurn).toFixed(1);
    return `${months} mos`;
  }, [cashBalance, netBurn]);

  const runwayStatus = useMemo(() => {
    if (netBurn <= 0) return { label: 'Self-Sustaining', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    const months = cashBalance / netBurn;
    if (months > 12) return { label: 'Optimal Buffer', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    if (months >= 6) return { label: 'Moderate Caution', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' };
    return { label: 'Critical Runway Alert', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' };
  }, [cashBalance, netBurn]);

  const handleOpenModal = (mode = 'signup') => {
    setModalMode(mode);
    setSubmittedForm(false);
    setModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!formEmail) return;
    setSubmittedForm(true);
  };

  const faqs = [
    {
      q: 'How does Float predict cash flow and runway?',
      a: 'Float securely connects with your bank accounts (via Plaid/Stripe) and accounting tools (QuickBooks, Xero, NetSuite). It analyzes recurring revenue patterns, bills, payroll, and seasonal trends using predictive modeling to give you real-time forecast accuracy up to 24 months out.'
    },
    {
      q: 'Is my financial data secure?',
      a: 'Yes. We utilize bank-grade 256-bit AES encryption and SOC-2 Type II certified infrastructure. Float only requires read-only permissions to your financial institutions, meaning your funds cannot be moved or altered.'
    },
    {
      q: 'Can I model custom scenarios like hiring or fundraising?',
      a: 'Absolutely. Float includes an interactive scenario builder. You can simulate adding 5 new team members, landing a \$50k/mo client, or receiving an equity investment, and immediately visualize how it affects your cash zero date.'
    },
    {
      q: 'How long does setup take?',
      a: 'Most teams are fully up and running in less than 5 minutes. Float automatically categorizes historical inflows and outflows so you get immediate insights without tedious manual spreadsheets.'
    },
    {
      q: 'Can I export reports for my board or investors?',
      a: 'Yes! Export presentation-ready PDF decks, CSV reconciliations, or create shared read-only links with fine-grained permission controls for your board, founders, and accountants.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Ambient background glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* =========================================
          1. NAVIGATION BAR
      ========================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(10, 13, 20, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px'
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.4rem'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
              }}
            >
              <Zap size={20} color="#ffffff" />
            </div>
            <span>Float</span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                background: 'rgba(99, 102, 241, 0.2)',
                color: '#818cf8',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}
            >
              v2.0
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px'
            }}
            className="desktop-nav"
          >
            <a
              href="#features"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Features
            </a>
            <a
              href="#calculator"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Runway Calculator
            </a>
            <a
              href="#how-it-works"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Pricing
            </a>
            <a
              href="#faq"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Auth CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="desktop-actions">
            <button
              onClick={() => handleOpenModal('login')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                padding: '8px 12px'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Sign In
            </button>
            <button onClick={() => handleOpenModal('signup')} className="btn-primary">
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '6px'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '20px 24px',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}
            >
              Features
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}
            >
              Runway Calculator
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}
            >
              FAQ
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal('login');
                }}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal('signup');
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================
          2. HERO SECTION
      ========================================= */}
      <section style={{ paddingTop: '80px', paddingBottom: '90px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '980px' }}>
          {/* Announcement pill */}
          <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
            <a href="#features" className="pill-badge">
              <Sparkles size={15} color="#818cf8" />
              <span>Float Intelligence 2.0 is live</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span style={{ textDecoration: 'underline' }}>Explore updates →</span>
            </a>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '24px'
            }}
          >
            Never fly blind on your <br />
            <span className="text-gradient">business cash flow</span> again.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Float unifies your bank feeds, models intelligent runway forecasts, and protects your
            liquidity buffer — so you can make bold hiring and growth decisions with clarity.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            <button
              onClick={() => handleOpenModal('signup')}
              className="btn-primary"
              style={{ padding: '14px 30px', fontSize: '1.05rem' }}
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleOpenModal('demo')}
              className="btn-secondary"
              style={{ padding: '14px 26px', fontSize: '1.05rem' }}
            >
              <span>Book Interactive Demo</span>
            </button>
          </div>

          {/* Reassurance points */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              color: 'var(--text-dim)',
              fontSize: '0.875rem',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> 2-minute setup with Plaid
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> SOC-2 Type II Certified
            </span>
          </div>

          {/* =========================================
              HERO LIVE PRODUCT PREVIEW MOCKUP
          ========================================= */}
          <div
            className="glass-panel-glow"
            style={{
              padding: '28px',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '18px',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                  Live Treasury Dashboard — Float Operations
                </span>
              </div>

              {/* Scenario Toggle */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '4px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  gap: '4px'
                }}
              >
                <button
                  onClick={() => setHeroScenario('conservative')}
                  style={{
                    background: heroScenario === 'conservative' ? 'rgba(99, 102, 241, 0.3)' : 'transparent',
                    color: heroScenario === 'conservative' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Conservative
                </button>
                <button
                  onClick={() => setHeroScenario('base')}
                  style={{
                    background: heroScenario === 'base' ? 'rgba(99, 102, 241, 0.3)' : 'transparent',
                    color: heroScenario === 'base' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Base Case
                </button>
                <button
                  onClick={() => setHeroScenario('growth')}
                  style={{
                    background: heroScenario === 'growth' ? 'rgba(99, 102, 241, 0.3)' : 'transparent',
                    color: heroScenario === 'growth' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Aggressive
                </button>
              </div>
            </div>

            {/* Metric Summary Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '18px',
                marginBottom: '24px'
              }}
            >
              {/* Card 1: Total Liquid Float */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Liquid Buffer</span>
                  <DollarSign size={16} color="#818cf8" />
                </div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff' }}>
                  {heroScenario === 'conservative' ? '$342,100' : heroScenario === 'base' ? '$489,450' : '$620,800'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.75rem', color: '#10b981' }}>
                  <TrendingUp size={14} />
                  <span>+14.8% vs last month</span>
                </div>
              </div>

              {/* Card 2: Projected Runway */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Projected Runway</span>
                  <Calendar size={16} color="#06b6d4" />
                </div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff' }}>
                  {heroScenario === 'conservative' ? '11.4 Months' : heroScenario === 'base' ? '18.2 Months' : '26.8 Months'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.75rem', color: '#818cf8' }}>
                  <Sparkles size={14} />
                  <span>Zero-cash date: Oct 2028</span>
                </div>
              </div>

              {/* Card 3: Monthly Net Cash Flow */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Net Cash Inflow</span>
                  <Activity size={16} color="#10b981" />
                </div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#10b981' }}>
                  {heroScenario === 'conservative' ? '+$12,400' : heroScenario === 'base' ? '+$38,900' : '+$74,200'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>AR: $98k due next 14d</span>
                </div>
              </div>

              {/* Card 4: Health Score */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Float Health Score</span>
                  <Shield size={16} color="#a855f7" />
                </div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#c084fc' }}>
                  {heroScenario === 'conservative' ? '88 / 100' : heroScenario === 'base' ? '96 / 100' : '99 / 100'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.75rem', color: '#10b981' }}>
                  <span>Top 5% of SaaS peer group</span>
                </div>
              </div>
            </div>

            {/* Visual Mini Chart Representation */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  12-Month Liquidity & Cash Flow Trajectory
                </span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Synced 2m ago (Plaid API)
                </span>
              </div>

              {/* Simulated Wave Bar Chart */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px',
                  height: '110px',
                  paddingTop: '10px'
                }}
              >
                {[45, 52, 60, 58, 68, 75, 72, 85, 92, 98, 105, 118].map((val, idx) => {
                  const factor = heroScenario === 'conservative' ? 0.75 : heroScenario === 'base' ? 1 : 1.25;
                  const adjustedHeight = Math.min(100, Math.round(val * 0.7 * factor));
                  return (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: `${adjustedHeight}%`,
                          background:
                            idx >= 8
                              ? 'linear-gradient(180deg, #818cf8 0%, rgba(99, 102, 241, 0.4) 100%)'
                              : 'linear-gradient(180deg, #4f46e5 0%, rgba(79, 70, 229, 0.3) 100%)',
                          borderRadius: '4px 4px 0 0',
                          transition: 'height 0.4s ease'
                        }}
                      />
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. LOGOS / SOCIAL PROOF TICKER
      ========================================= */}
      <section
        style={{
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(15, 20, 34, 0.5)',
          padding: '36px 0'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              marginBottom: '24px'
            }}
          >
            Powering cash flow operations for 2,500+ fast-growing modern companies
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
              opacity: 0.75
            }}
          >
            {['Veloce Capital', 'HyperScale Labs', 'Lumina Commerce', 'BaseLayer SaaS', 'FinCore Group', 'NextPulse AI'].map(
              (brand, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '-0.02em'
                  }}
                >
                  <Building size={18} color="#6366f1" />
                  <span>{brand}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          4. INTERACTIVE RUNWAY CALCULATOR WIDGET
      ========================================= */}
      <section id="calculator" style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <LineChart size={14} color="#818cf8" />
              <span>Interactive Financial Simulator</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}
            >
              How much <span className="text-gradient">float</span> does your business have?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Adjust the sliders below to estimate your operational runway, cash burn buffer, and financial resilience.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px'
            }}
          >
            {/* Sliders Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Slider 1: Cash Balance */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Current Cash in Bank
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                    ${cashBalance.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1500000"
                  step="10000"
                  value={cashBalance}
                  onChange={(e) => setCashBalance(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  <span>$20k</span>
                  <span>$1.5M</span>
                </div>
              </div>

              {/* Slider 2: Monthly Revenue */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Monthly Revenue (Inflows)
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981' }}>
                    ${monthlyRevenue.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300000"
                  step="5000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  <span>$0</span>
                  <span>$300k/mo</span>
                </div>
              </div>

              {/* Slider 3: Monthly Burn / Expenses */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Monthly Burn & Expenses
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ef4444' }}>
                    ${monthlyBurn.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="350000"
                  step="5000"
                  value={monthlyBurn}
                  onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  <span>$5k</span>
                  <span>$350k/mo</span>
                </div>
              </div>
            </div>

            {/* Results Output Box */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Estimated Runway
                  </span>
                  <span
                    style={{
                      background: runwayStatus.bg,
                      color: runwayStatus.color,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: `1px solid ${runwayStatus.color}40`
                    }}
                  >
                    {runwayStatus.label}
                  </span>
                </div>

                <div style={{ fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {runwayMonths}
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Net Monthly Flow:</span>
                    <span style={{ fontWeight: 700, color: netBurn <= 0 ? '#10b981' : '#f59e0b' }}>
                      {netBurn <= 0 ? `+$${Math.abs(netBurn).toLocaleString()}/mo` : `-$${netBurn.toLocaleString()}/mo`}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Float Recommended Buffer:</span>
                    <span style={{ fontWeight: 700, color: '#ffffff' }}>
                      ${(monthlyBurn * 6).toLocaleString()} (6 months)
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => handleOpenModal('signup')}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Connect Real Banks to Auto-Forecast</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. FEATURES SECTION
      ========================================= */}
      <section id="features" style={{ padding: '90px 0', background: 'rgba(15, 20, 34, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <Zap size={14} color="#818cf8" />
              <span>Engineered For Finance & Founders</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}
            >
              Everything you need to master your cash flow
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Replace broken spreadsheets, blind guesswork, and frantic end-of-month panic with automated clarity.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Feature 1 */}
            <div className="glass-panel" style={{ padding: '32px', transition: 'transform 0.2s', cursor: 'default' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <TrendingUp size={24} color="#818cf8" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Predictive AI Runway
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Machine-learning algorithms analyze seasonal spikes, contract renewals, churn, and pending vendor invoices to project your exact balance day-by-day.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Layers size={24} color="#06b6d4" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Multi-Scenario Sandbox
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Simulate "what-if" decisions before committing. See instant visual impact if you hire 3 developers, increase ad budget, or experience delayed invoices.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Zap size={24} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Instant Bank Reconciliation
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Automatic two-way sync with 12,000+ banks worldwide, Stripe, QuickBooks, and Xero. Never waste another weekend manually matching receipts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <AlertCircle size={24} color="#f59e0b" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Float Buffer Early Warning
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Smart threshold alerts ping you via Slack, Email, or SMS weeks before any payroll crunch or vendor shortfall occurs, giving you time to act.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Users size={24} color="#c084fc" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Board & Investor Sharing
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Generate presentation-ready financial packages with one click. Share live, read-only dashboards with external stakeholders with complete privacy controls.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Lock size={24} color="#f87171" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                Bank-Grade Security
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Protected with 256-bit encryption, strict SOC-2 compliance, and zero money-movement privileges. Your accounting data is strictly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. HOW IT WORKS
      ========================================= */}
      <section id="how-it-works" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="#818cf8" />
              <span>Simplicity By Design</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}
            >
              Live cash clarity in three quick steps
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}
          >
            {[
              {
                step: '01',
                title: 'Connect your accounts',
                desc: 'Sync your bank accounts, Stripe, Gusto, and accounting software with encrypted 1-click Plaid integrations.'
              },
              {
                step: '02',
                title: 'Review automated forecast',
                desc: 'Float builds your baseline cash timeline, auto-classifying inflows, outflows, and recurring operational commitments.'
              },
              {
                step: '03',
                title: 'Simulate & scale with confidence',
                desc: 'Run scenarios, protect your cash runway buffer, and make confident business investments without sleepless nights.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '36px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '24px',
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.04)',
                    lineHeight: 1
                  }}
                >
                  {item.step}
                </span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--accent-primary)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    marginBottom: '20px'
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. PRICING SECTION
      ========================================= */}
      <section id="pricing" style={{ padding: '100px 0', background: 'rgba(15, 20, 34, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <DollarSign size={14} color="#818cf8" />
              <span>Transparent Pricing</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}
            >
              Predictable plans for every stage
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px' }}>
              Start with our 14-day free trial. Upgrade, downgrade, or cancel anytime.
            </p>

            {/* Monthly / Annual Toggle */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                gap: '8px'
              }}
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                style={{
                  background: billingCycle === 'monthly' ? '#6366f1' : 'transparent',
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                style={{
                  background: billingCycle === 'annual' ? '#6366f1' : 'transparent',
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Annual</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    background: '#10b981',
                    color: '#ffffff',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}
                >
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '28px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {/* Tier 1: Starter */}
            <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '6px' }}>Starter</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Ideal for indie builders, pre-seed teams, and solo entrepreneurs.
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800 }}>$0</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>/ forever free</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {['1 bank account integration', '3-month forward forecast', 'Weekly email digest', 'Basic runway calculator', 'Standard community support'].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => handleOpenModal('signup')} className="btn-secondary" style={{ width: '100%' }}>
                Get Started Free
              </button>
            </div>

            {/* Tier 2: Growth (Popular) */}
            <div
              className="glass-panel-glow"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transform: 'scale(1.02)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
                }}
              >
                Most Popular
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '6px' }}>Growth</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  For venture-backed startups and growing businesses managing active burn.
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800 }}>
                    {billingCycle === 'annual' ? '$39' : '$49'}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>/ month</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {[
                    'Unlimited bank & credit card feeds',
                    '24-month predictive AI forecast',
                    'Interactive what-if scenario modeler',
                    'QuickBooks, Xero & Stripe sync',
                    'Slack & SMS shortfall alert triggers',
                    'Priority 24/7 chat support'
                  ].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ffffff' }}>
                      <CheckCircle2 size={16} color="#6366f1" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => handleOpenModal('signup')} className="btn-primary" style={{ width: '100%' }}>
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Tier 3: Scale */}
            <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '6px' }}>Scale</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  For multi-entity businesses, CFOs, and fast-scaling enterprises.
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800 }}>
                    {billingCycle === 'annual' ? '$99' : '$129'}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>/ month</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {[
                    'Everything in Growth',
                    'Multi-entity consolidation',
                    'Board & investor read-only rooms',
                    'NetSuite & custom ERP integrations',
                    'Dedicated finance strategist',
                    'Custom SLA & SOC2 audit reports'
                  ].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => handleOpenModal('demo')} className="btn-secondary" style={{ width: '100%' }}>
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. TESTIMONIALS
      ========================================= */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '14px'
              }}
            >
              Loved by CFOs, founders, and finance operators
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                quote:
                  'Float completely replaced our clumsy 18-tab Google Sheet. Before Float, predicting when we needed our Series A extension felt like throwing darts in the dark.',
                name: 'Elena Rostova',
                role: 'CEO & Co-founder',
                company: 'Veloce Robotics'
              },
              {
                quote:
                  'The scenario sandbox alone paid for Float ten times over. We were able to model hiring 8 engineers without risking our critical 12-month safety buffer.',
                name: 'Marcus Chen',
                role: 'Head of Finance',
                company: 'HyperScale AI'
              },
              {
                quote:
                  'Our board loves the live dashboard links. Instead of scrambling to build decks before quarterly meetings, I just share Float read-only access. Huge time saver.',
                name: 'Sarah Lindqvist',
                role: 'COO',
                company: 'Nordic Commerce'
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '32px' }}>
                <p style={{ color: '#e2e8f0', fontSize: '1rem', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                  "{item.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff' }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {item.role} • <span style={{ color: '#818cf8' }}>{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. FAQ SECTION
      ========================================= */}
      <section id="faq" style={{ padding: '90px 0', background: 'rgba(15, 20, 34, 0.3)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <span>Frequently Asked Questions</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '14px'
              }}
            >
              Got questions? We've got answers.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-panel"
                  style={{
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                    borderColor: isOpen ? 'rgba(99, 102, 241, 0.4)' : 'var(--border-subtle)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '1.05rem',
                      fontWeight: 600
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#818cf8" /> : <ChevronDown size={20} color="var(--text-dim)" />}
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 22px',
                        color: 'var(--text-muted)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          10. FINAL CALL TO ACTION (CTA)
      ========================================= */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            className="glass-panel-glow"
            style={{
              padding: '60px 40px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '18px'
              }}
            >
              Take absolute control of your cash runway.
            </h2>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.15rem',
                maxWidth: '600px',
                margin: '0 auto 36px',
                lineHeight: 1.6
              }}
            >
              Join thousands of businesses who stopped stressing over spreadsheets and started steering with Float.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenModal('signup')}
                className="btn-primary"
                style={{ padding: '14px 34px', fontSize: '1.05rem' }}
              >
                <span>Get Started in 2 Minutes</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleOpenModal('demo')}
                className="btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1.05rem' }}
              >
                <span>Schedule a 1-on-1 Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          11. FOOTER
      ========================================= */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '60px 0 30px',
          background: 'var(--bg-secondary)',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '50px'
            }}
          >
            {/* Col 1 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', marginBottom: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={16} color="#ffffff" />
                </div>
                <span>Float</span>
              </div>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '16px' }}>
                Intelligent cash flow forecasting, runway optimization, and treasury buffer for modern enterprises.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#10b981' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span>All systems operational</span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>Product</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Predictive AI Forecast</a></li>
                <li><a href="#calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Runway Simulator</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Bank Integrations</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Scenario Modeling</a></li>
                <li><a href="#pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing Plans</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>Integrations</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><span style={{ color: 'var(--text-muted)' }}>QuickBooks Online</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Xero Cloud</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Stripe Connect</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Plaid Treasury</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Gusto Payroll</span></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>Company & Security</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><span style={{ color: 'var(--text-muted)' }}>SOC-2 Type II Compliance</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Privacy Policy</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Terms of Service</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Security Whitepaper</span></li>
                <li><span style={{ color: 'var(--text-muted)' }}>Contact Support</span></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.85rem',
              color: 'var(--text-dim)'
            }}
          >
            <div>© {new Date().getFullYear()} Float Technologies, Inc. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy</span>
              <span>Security</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================
          12. INTERACTIVE MODAL (SIGN UP / DEMO / LOGIN)
      ========================================= */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="glass-panel-glow"
            style={{
              background: '#0f172a',
              width: '100%',
              maxWidth: '460px',
              padding: '32px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {submittedForm ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>
                  {modalMode === 'demo' ? 'Demo Scheduled!' : 'Welcome to Float!'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  We've sent verification details and your instant onboarding link to <strong>{formEmail}</strong>.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setSubmittedForm(false);
                  }}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                {/* Modal Tabs */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '14px',
                    marginBottom: '24px'
                  }}
                >
                  <button
                    onClick={() => setModalMode('signup')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: modalMode === 'signup' ? '#ffffff' : 'var(--text-muted)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      borderBottom: modalMode === 'signup' ? '2px solid #6366f1' : 'none',
                      paddingBottom: '4px'
                    }}
                  >
                    Start Free Trial
                  </button>
                  <button
                    onClick={() => setModalMode('demo')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: modalMode === 'demo' ? '#ffffff' : 'var(--text-muted)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      borderBottom: modalMode === 'demo' ? '2px solid #6366f1' : 'none',
                      paddingBottom: '4px'
                    }}
                  >
                    Book Demo
                  </button>
                  <button
                    onClick={() => setModalMode('login')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: modalMode === 'login' ? '#ffffff' : 'var(--text-muted)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      borderBottom: modalMode === 'login' ? '2px solid #6366f1' : 'none',
                      paddingBottom: '4px'
                    }}
                  >
                    Sign In
                  </button>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                  {modalMode === 'signup'
                    ? 'Start your 14-day free trial'
                    : modalMode === 'demo'
                    ? 'Schedule a personalized walkthrough'
                    : 'Sign in to your Float account'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>
                  {modalMode === 'signup'
                    ? 'No credit card required. Connect accounts in 2 minutes.'
                    : modalMode === 'demo'
                    ? 'Speak with a cash flow and runway specialist.'
                    : 'Access your predictive dashboards and treasury.'}
                </p>

                <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {modalMode !== 'login' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Morgan"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '8px', width: '100%' }}>
                    {modalMode === 'signup'
                      ? 'Create Free Account'
                      : modalMode === 'demo'
                      ? 'Confirm Demo Booking'
                      : 'Sign In to Float'}
                  </button>
                </form>

                <div style={{ marginTop: '18px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  By continuing, you agree to Float's Terms of Service and Privacy Policy.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive stylesheet helpers */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
