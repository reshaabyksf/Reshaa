'use client';
import { useState, useEffect } from 'react';

const COLORS = ['White', 'Ivory', 'Red', 'Orange', 'Lemon Yellow', 'Golden Yellow', 'Peacock Blue', 'Bottle Green', 'Medical Green', 'Beige', 'Brown', 'Black', 'Gray', 'Color Change', 'Royal Blue', 'Pink', 'Baby Pink', 'Lavender', 'Parrot Green', 'Medical Blue'];
const QUALITIES = ['Virgin', 'Fresh', 'Semi-Fresh', 'Semi 2', 'Semi Star'];
const BAG_TYPES = ['D-Cut', 'W-Cut', 'Loop Handle', 'Box Bag', 'Leader Bag', 'Stitched', 'Fabric Roll', 'Fabric Sheet'];

const Tools = () => {
  const [orderMode, setOrderMode] = useState('kg');

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

  const [singleBagWeightGrams, setSingleBagWeightGrams] = useState(0);
  const [calculatedResult, setCalculatedResult] = useState({ mainValue: 0, finalKgForDb: 0, rollWidth: 0, wastageInfo: '' });

  useEffect(() => {
    if (inputs.bagType === 'D-Cut') setInputs((prev) => ({ ...prev, topFold: 3 }));
    else if (inputs.bagType === 'Loop Handle') setInputs((prev) => ({ ...prev, topFold: 1 }));
    else if (inputs.bagType === 'Box Bag' || inputs.bagType === 'Leader Bag') setInputs((prev) => ({ ...prev, topFold: 1 }));
    else if (inputs.bagType === 'Stitched') setInputs((prev) => ({ ...prev, topFold: 1.5 }));
    else setInputs((prev) => ({ ...prev, topFold: 0 }));
  }, [inputs.bagType]);

  useEffect(() => {
    if (inputs.inputValue > 0 && inputs.width > 0 && inputs.height > 0) {
      const W = Number(inputs.width);
      const H = Number(inputs.height);
      const G = Number(inputs.gusset);
      const F = Number(inputs.topFold);
      const GSM = Number(inputs.gsm);
      
      let calcRollWidth = 0;
      let fabricAreaInch = 0;

      if (inputs.bagType === 'W-Cut') {
        calcRollWidth = W + (G * 2);
        fabricAreaInch = calcRollWidth * (H * 2);
      } else if (inputs.bagType === 'Box Bag' || inputs.bagType === 'Leader Bag') {
        calcRollWidth = (H * 2) + G + (F * 2);
        const cutLength = W + G;
        fabricAreaInch = calcRollWidth * cutLength;
      } else if (inputs.bagType === 'Stitched') {
        calcRollWidth = W + (G * 2) + 2;
        fabricAreaInch = calcRollWidth * (H + F) * 2;
      } else if (inputs.bagType === 'Fabric Sheet') {
        calcRollWidth = W;
        fabricAreaInch = W * H;
      } else {
        calcRollWidth = (H + F) * 2;
        const effectiveWidth = W + (G > 0 ? G : 0);
        fabricAreaInch = calcRollWidth * effectiveWidth;
      }
      
      const fabricGrams = (fabricAreaInch * 0.00064516) * GSM;
      let handleWeightGrams = ['Loop Handle', 'Box Bag', 'Stitched', 'Leader Bag'].includes(inputs.bagType) ? 4 : 0;
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
    setInputs({ ...inputs, [e.target.name]: value });
  };

  const handleReset = () => {
    setOrderMode('kg');
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
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px', textAlign: 'center', letterSpacing: '0.5px' }}>
          SPECIFICATION CALCULATOR
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', textAlign: 'center', marginBottom: '40px' }}>
          Instantly compute exact fabric roll widths, unit piece weights, and manufacturing yield rates based on your custom bag dimensions.
        </p>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '20px', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid rgba(226, 232, 240, 0.8)', 
          backdropFilter: 'blur(12px)', display: 'flex', flexDirection: 'column', gap: '30px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '15px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Engineering Parameters</h2>
            <div style={{ display: 'flex', backgroundColor: '#e2e8f0', borderRadius: '8px', padding: '4px' }}>
              <button type="button" onClick={() => setOrderMode('pieces')} style={{ padding: '6px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer', backgroundColor: orderMode === 'pieces' ? '#ffffff' : 'transparent', color: orderMode === 'pieces' ? '#2563eb' : '#64748b' }}>By Pieces</button>
              <button type="button" onClick={() => setOrderMode('kg')} style={{ padding: '6px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer', backgroundColor: orderMode === 'kg' ? '#ffffff' : 'transparent', color: orderMode === 'kg' ? '#16a34a' : '#64748b' }}>By Weight (Kg)</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Bag Type</label>
              <select name="bagType" value={inputs.bagType} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                {BAG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Print Technology</label>
              <select name="printType" value={inputs.printType} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                <option value="Plain">Plain (Unprinted)</option>
                <option value="Flex">Flex Printing</option>
                <option value="Offset">Offset Printing</option>
                <option value="Screen">Screen Printing</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7e22ce', textTransform: 'uppercase', marginBottom: '6px' }}>Polymer Quality</label>
              <select name="quality" value={inputs.quality} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e9d5ff', fontSize: '14px', fontWeight: '600', color: '#0f172a', backgroundColor: '#f3e8ff' }}>
                {QUALITIES.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Fabric Color</label>
              <select name="color" value={inputs.color} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                {COLORS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>GSM</label>
              <input type="number" name="gsm" value={inputs.gsm} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Width</label>
              <input type="number" name="width" value={inputs.width} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Height</label>
              <input type="number" name="height" value={inputs.height} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Gusset</label>
              <input type="number" name="gusset" value={inputs.gusset} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#e11d48', textTransform: 'uppercase', marginBottom: '6px' }}>Top Fold</label>
              <input type="number" name="topFold" value={inputs.topFold} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #fecdd3', backgroundColor: '#fff1f2' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', marginBottom: '6px' }}>
                {orderMode === 'pieces' ? 'Target Batch Quantity (Pieces)' : 'Target Batch Weight (Kg)'}
              </label>
              <input type="number" name="inputValue" value={inputs.inputValue} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bfdbfe', backgroundColor: '#eff6ff' }} />
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '14px', fontWeight: '600', color: '#475569' }}>
            {singleBagWeightGrams > 0 ? `Calculated Unit Weight: ${singleBagWeightGrams.toFixed(2)} g / piece` : ''}
          </div>

          <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '25px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '700' }}>ROLL SIZE | WASTAGE</div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#facc15' }}>{calculatedResult.rollWidth}" | {calculatedResult.wastageInfo}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '700' }}>MANUFACTURING YIELD</div>
              <div style={{ fontSize: '36px', fontWeight: '800' }}>{calculatedResult.mainValue} <span style={{ fontSize: '18px', color: '#64748b' }}>{orderMode === 'pieces' ? 'kg required' : 'total pieces'}</span></div>
            </div>
          </div>

          <button type="button" onClick={handleReset} style={{ width: '100%', padding: '14px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1' }}>
            🔄 Reset Calculation Parameters
          </button>
        </div>
      </section>
    </div>
  );
};

export default Tools;