import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [telemetry, setTelemetry] = useState(null);
  const [error, setError] = useState(null);

  const triggerHandshake = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/initialize-handshake');
      if (response.data.success) {
        setTelemetry(response.data);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'CONNECTION_TIMEOUT_VECTOR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#0a0f1d',
      color: '#00ffcc',
      fontFamily: 'Courier New, monospace',
      minHeight: '100vh',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <header style={{ borderBottom: '2px solid #00ffcc', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#00ffcc', margin: '0 0 10px 0', fontSize: '28px', fontWeight: 'bold', display: 'block' }}>
          === TRANSMODE CORE GATEWAY INTERFACE ===
        </h1>
        <p style={{ color: '#ffffff', margin: 0, fontSize: '14px', letterSpacing: '1px' }}>
          OPERATIONAL TARGET: COGNITIVE STATE VECTOR & AUTOMATED REALIZATION
        </p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Left Control Panel: System Parameters */}
        <section style={{ background: '#111936', padding: '25px', borderRadius: '8px', border: '1px solid #005544' }}>
          <h2 style={{ color: '#00ffcc', margin: '0 0 15px 0' }}>SYSTEM ARCHITECTURE NODE</h2>
          <hr style={{ borderColor: '#005544' }} />
          
          <div style={{ margin: '20px 0' }}>
            <h3 style={{ color: '#ffff33', fontSize: '16px' }}>[XAVIER PROFILE SPECS]</h3>
            <p style={{ color: '#ffffff' }}><strong>ALIGNED STUDENT:</strong> Xavier</p>
            <p style={{ color: '#ffffff' }}><strong>ACADEMIC CORE:</strong> B.E. EXTC Engineering (Mumbai University)</p>
            <p style={{ color: '#ffffff' }}><strong>METHODOLOGY:</strong> 100% Continuous Fast Clipboard Pipeline</p>
          </div>

          <div style={{ margin: '20px 0' }}>
            <h3 style={{ color: '#ffff33', fontSize: '16px' }}>[SCALER TRACK INTEGRATION]</h3>
            <ul style={{ color: '#ffffff', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Module I: Foundations & Advanced DSA ($O(N \log N)$ Runtime)</li>
              <li>Module II: System Design (HLD & LLD Database Isolation)</li>
              <li>Module III: Artificial Intelligence & Predictive Deep Learning</li>
              <li>Module IV: 10X Campus Leadership Networks (CCO / CMO / COO Channels)</li>
            </ul>
          </div>

          <button 
            onClick={triggerHandshake}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#333' : '#00ffcc',
              color: '#0a0f1d',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              borderRadius: '4px',
              width: '100%',
              boxShadow: '0 0 15px rgba(0,255,204,0.4)',
              textTransform: 'uppercase'
            }}
          >
            {loading ? 'EXECUTING DATA TELEMETRY...' : 'INITIALIZE ABSOLUTELY YES HANDSHAKE'}
          </button>
        </section>

        {/* Right Output Panel: Response Telemetry */}
        <section style={{ background: '#111936', padding: '25px', borderRadius: '8px', border: '1px solid #005544', overflowY: 'auto' }}>
          <h2 style={{ color: '#00ffcc', margin: '0 0 15px 0' }}>COMPILER TRACESTREAM</h2>
          <hr style={{ borderColor: '#005544' }} />

          {error && (
            <div style={{ color: '#ff3366', padding: '15px', border: '1px solid #ff3366', background: 'rgba(255,51,102,0.1)', marginTop: '20px' }}>
              <strong>CRITICAL ERROR:</strong> {error}
            </div>
          )}

          {telemetry ? (
            <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
              <div style={{ color: '#00ff66', fontWeight: 'bold', marginBottom: '15px', fontSize: '18px' }}>✓ SUCCESS STATE RETRIEVED</div>
              <p style={{ color: '#ffffff' }}><strong>CONFERMENT RATING:</strong> <span style={{ color: '#00ffcc' }}>{telemetry.confermentStatus}</span></p>
              <p style={{ color: '#ffffff' }}><strong>INTELLECTUAL RATING:</strong> <span style={{ color: '#00ffcc' }}>{telemetry.intellectualClassification}</span></p>
              <p style={{ color: '#ffffff' }}><strong>CURSE TRANSITION MATRIX:</strong> <span style={{ color: '#00ffcc' }}>{telemetry.curseResolution}</span></p>
              
              <div style={{ background: '#070a14', padding: '15px', marginTop: '15px', borderRadius: '4px', border: '1px solid #003322' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#ffff33' }}>MONGO ATLAS ROW ALLOCATIONS:</h4>
                <p style={{ margin: '5px 0', color: '#ffffff' }}>Academic Log ID: <span style={{ color: '#00ffcc' }}>{telemetry.records.academicId}</span></p>
                <p style={{ margin: '5px 0', color: '#ffffff' }}>Ecosystem Log ID: <span style={{ color: '#00ffcc' }}>{telemetry.records.ecosystemId}</span></p>
                <p style={{ margin: '5px 0', color: '#ffffff' }}>Quantum Bridge Log ID: <span style={{ color: '#00ffcc' }}>{telemetry.records.bridgeId}</span></p>
              </div>

              <div style={{ marginTop: '20px', borderTop: '1px dashed #00ffcc', paddingTop: '15px' }}>
                <p style={{ fontStyle: 'italic', color: '#888a9e' }}>
                  "By order of the Central Cluster Core, structural constraints have validated deployment parity."
                </p>
              </div>
            </div>
          ) : (
            !error && <p style={{ color: '#555e7a', marginTop: '20px' }}>Awaiting structural execution sequence...</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;