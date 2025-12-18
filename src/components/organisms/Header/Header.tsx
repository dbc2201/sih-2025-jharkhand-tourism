export const Header = () => {
    return (
        <>  <style>
            {`
/* ================= ROOT TOKENS ================= */
:root {
    --primary: #2563eb;
    --primary-light: #3b82f6;
    --success: #16a34a;
    --text-dark: #111827;
    --text-muted: #6b7280;
    --border: #e5e7eb;
}

/* ================= HEADER ================= */
.header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.88)
    );
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
    padding: 14px 16px 22px;
}

/* ================= TOP BAR ================= */
.header-top {
    display: grid;
    grid-template-columns: 46px 1fr 46px;
    align-items: center;
}

.icon-btn {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.15s ease;
}

.icon-btn:hover {
    background: rgba(37, 99, 235, 0.12);
}

.icon-btn:active {
    transform: scale(0.9);
}

.icon-btn span {
    font-size: 22px;
    color: var(--primary);
}

.header-title {
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    color: var(--text-dark);
    letter-spacing: 0.4px;
}

/* ================= STEPPER ================= */
.stepper {
    margin-top: 22px;
}

.stepper-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
}

/* Base line */
.stepper-line {
    position: absolute;
    top: 19px;
    left: 6%;
    right: 6%;
    height: 3px;
    background: var(--border);
    border-radius: 999px;
}

/* Active line */
.stepper-line-active {
    position: absolute;
    top: 19px;
    left: 6%;
    width: 38%;
    height: 3px;
    background: linear-gradient(
        90deg,
        var(--primary),
        var(--primary-light)
    );
    border-radius: 999px;
    transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ================= STEP ================= */
.step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 64px;
}

/* Circle */
.step-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 18px;
    transition: all 0.35s ease;
}

/* ================= ACTIVE STEP ================= */
.step.active .step-circle {
    background: radial-gradient(
        circle at top,
        #60a5fa,
        var(--primary)
    );
    border-color: var(--primary);
    color: #fff;
    box-shadow:
        0 0 0 6px rgba(37, 99, 235, 0.18),
        0 14px 30px rgba(37, 99, 235, 0.45);
    animation: pulse 1.6s infinite;
}

/* ================= COMPLETED STEP ================= */
.step.completed .step-circle {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    border-color: #16a34a;
    color: #fff;
    box-shadow: 0 10px 24px rgba(22, 163, 74, 0.45);
}

.step.completed .step-circle span {
    font-size: 20px;
}

/* ================= LABEL ================= */
.step-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-muted);
    text-align: center;
    letter-spacing: 0.3px;
    transition: color 0.3s ease;
}

.step.active .step-label {
    color: var(--primary);
}

.step.completed .step-label {
    color: var(--success);
}

/* ================= ANIMATIONS ================= */
@keyframes pulse {
    0% {
        box-shadow:
            0 0 0 0 rgba(37, 99, 235, 0.45),
            0 14px 30px rgba(37, 99, 235, 0.45);
    }
    70% {
        box-shadow:
            0 0 0 12px rgba(37, 99, 235, 0),
            0 14px 30px rgba(37, 99, 235, 0.45);
    }
    100% {
        box-shadow:
            0 0 0 0 rgba(37, 99, 235, 0),
            0 14px 30px rgba(37, 99, 235, 0.45);
    }
}

/* ================= SMALL SCREENS ================= */
@media (max-width: 360px) {
    .step-circle {
        width: 34px;
        height: 34px;
    }

    .step-label {
        font-size: 10px;
    }
}
`}
        </style>


            <header className="header">
                <div className="header-top">
                    <button className="icon-btn">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>

                    <h1 className="header-title">Tourist Registration</h1>

                    <button className="icon-btn">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                <div className="stepper">
                    <div className="stepper-wrapper">
                        <div className="stepper-line"></div>
                        <div className="stepper-line-active"></div>

                        <div className="step active">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <span className="step-label">Personal</span>
                        </div>

                        <div className="step active">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">id_card</span>
                            </div>
                            <span className="step-label">ID Proof</span>
                        </div>

                        <div className="step">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">emergency_home</span>
                            </div>
                            <span className="step-label">Contact</span>
                        </div>

                        <div className="step">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">fact_check</span>
                            </div>
                            <span className="step-label">Review</span>
                        </div>
                    </div>
                </div>
            </header></>
    )
}
export default Header;