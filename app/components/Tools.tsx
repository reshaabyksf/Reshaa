'use client';
import { useState, useEffect } from 'react';

const COLORS = ['White', 'Ivory', 'Red', 'Orange', 'Lemon Yellow', 'Golden Yellow', 'Peacock Blue', 'Bottle Green', 'Medical Green', 'Beige', 'Brown', 'Black', 'Gray', 'Color Change', 'Royal Blue', 'Pink', 'Baby Pink', 'Lavender', 'Parrot Green', 'Medical Blue'];
const QUALITIES = ['Virgin', 'Fresh', 'Semi-Fresh', 'Semi 2', 'Semi Star'];
const BAG_TYPES = ['D-Cut', 'W-Cut', 'Loop Handle', 'Box Bag', 'Leader Bag', 'Stitched', 'Fabric Roll', 'Fabric Sheet'];

const Tools = () => {
  const [orderMode, setOrderMode] = useState('kg');
  const [singleBagWeightGrams, setSingleBagWeightGrams] = useState(0);
  const [calculatedResult, setCalculatedResult] = useState({ mainValue: 0, finalKgForDb: 0, rollWidth: 0, wastageInfo: '' });

  const [inputs, setInputs] = useState({
    bagType: 'D-Cut',
    printType: 'Plain',
    gsm: 60,
    quality: 'Virgin',
    color: 'Ivory',
    width: 14,
    height: 18,
    gusset: 5,
    topFold: 3,
    inputValue: 100
  });

  // Auto-set Top Fold Defaults
  useEffect(() => {
    if (inputs.bagType === 'D-Cut') setInputs((prev) => ({ ...prev, topFold: 3 }));
    else if (inputs.bagType === 'Loop Handle') setInputs((prev) => ({ ...prev, topFold: 1 }));
    else if (inputs.bagType === 'Box Bag' || inputs.bagType === 'Leader Bag') setInputs((prev) => ({ ...prev, topFold: 1 }));
    else if (inputs.bagType === 'Stitched') setInputs((prev) => ({ ...prev, topFold: 1.5 }));
    else setInputs((prev) => ({ ...prev, topFold: 0 }));
  }, [inputs.bagType]);

  // Calculation Logic
  useEffect(() => {
    if (inputs.inputValue > 0 && inputs.width > 0 && inputs.height > 0) {
      const W = Number(inputs.width);
      const H = Number(inputs.height);
      const G = Number(inputs.gusset);
      const F = Number(inputs.topFold);
      const GSM = Number(inputs.gsm);
      
      let calcRollWidth = 0;
      let fabricAreaInch = 0;

      if (inputs.bagType === 'W-Cut') { calcRollWidth = W + (G * 2); fabricAreaInch = calcRollWidth * (H * 2); }
      else if (inputs.bagType === 'Box Bag' || inputs.bagType === 'Leader Bag') { calcRollWidth = (H * 2) + G + (F * 2); fabricAreaInch = calcRollWidth * (W + G); }
      else if (inputs.bagType === 'Stitched') { calcRollWidth = W + (G * 2) + 2; fabricAreaInch = calcRollWidth * (H + F) * 2; }
      else if (inputs.bagType === 'Fabric Sheet') { calcRollWidth = W; fabricAreaInch = W * H; }
      else { calcRollWidth = (H + F) * 2; fabricAreaInch = calcRollWidth * (W + (G > 0 ? G : 0)); }
      
      const fabricGrams = (fabricAreaInch * 0.00064516) * GSM;
      const handleWeightGrams = ['Loop Handle', 'Box Bag', 'Stitched', 'Leader Bag'].includes(inputs.bagType) ? 4 : 0;
      const singleBagTotalGrams = fabricGrams + handleWeightGrams;
      setSingleBagWeightGrams(singleBagTotalGrams);

      let wastagePercent = inputs.bagType === 'W-Cut' ? 0.12 : inputs.bagType === 'D-Cut' ? 0.02 : 0.03;
      if (inputs.bagType === 'Fabric Sheet') wastagePercent = 0.01;

      let mainResult = 0;
      if (orderMode === 'pieces') {
        mainResult = Number(((singleBagTotalGrams * inputs.inputValue) / 1000 * (1 + wastagePercent)).toFixed(2));
      } else {
        mainResult = Math.floor(((inputs.inputValue * 1000) / (1 + wastagePercent)) / singleBagTotalGrams);
      }

      setCalculatedResult({
        mainValue: mainResult,
        finalKgForDb: inputs.inputValue,
        rollWidth: Math.ceil(calcRollWidth),
        wastageInfo: `${(wastagePercent * 100).toFixed(0)}%`
      });
    }
  }, [inputs, orderMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setInputs(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleReset = () => {
    setOrderMode('kg');
    setSingleBagWeightGrams(0);
    setCalculatedResult({ mainValue: 0, finalKgForDb: 0, rollWidth: 0, wastageInfo: '' });
    setInputs({
      bagType: 'D-Cut',
      printType: 'Plain',
      gsm: 60,
      quality: 'Virgin',
      color: 'Ivory',
      width: 14,
      height: 18,
      gusset: 5,
      topFold: 3,
      inputValue: 100
    });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>SPECIFICATION CALCULATOR</h2>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Engineering Parameters</h2>
            <div style={{ display: 'flex', backgroundColor: '#e2e8f0', borderRadius: '8px', padding: '4px' }}>
              <button type="button" onClick={() => setOrderMode('pieces')} style={{ padding: '6px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: orderMode === 'pieces' ? '#ffffff' : 'transparent', color: orderMode === 'pieces' ? '#2563eb' : '#64748b', fontWeight: '700' }}>By Pieces</button>
              <button type="button" onClick={() => setOrderMode('kg')} style={{ padding: '6px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: orderMode === 'kg' ? '#ffffff' : 'transparent', color: orderMode === 'kg' ? '#16a34a' : '#64748b', fontWeight: '700' }}>By Weight (Kg)</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {/* Input fields remain the same as your structure */}
            {['gsm', 'width', 'height', 'gusset', 'topFold'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>{field.toUpperCase()}</label>
                <input type="number" name={field} value={inputs[field as keyof typeof inputs]} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
            ))}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#2563eb', marginBottom: '6px' }}>{orderMode === 'pieces' ? 'QUANTITY (PIECES)' : 'BATCH WEIGHT (KG)'}</label>
              <input type="number" name="inputValue" value={inputs.inputValue} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bfdbfe' }} />
            </div>
          </div>

          <div style={{ marginTop: '20px', backgroundColor: '#0f172a', color: '#ffffff', padding: '25px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: '800' }}>{calculatedResult.mainValue} <span style={{ fontSize: '18px' }}>{orderMode === 'pieces' ? 'kg required' : 'total pieces'}</span></div>
          </div>

          <button onClick={handleReset} style={{ width: '100%', marginTop: '20px', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', cursor: 'pointer', fontWeight: '700' }}>
            🔄 Reset Calculation Parameters
          </button>
        </div>
      </section>
    </div>
  );
};

export default Tools;