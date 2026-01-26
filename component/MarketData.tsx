// components/MarketData.tsx
'use client';

import { TrendingUp, TrendingDown, Activity, Zap, Cpu, RefreshCw } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const MarketData = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1D');
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('Just now');
  const chartRef = useRef<HTMLDivElement>(null);

  const timeframes = ['1H', '4H', '1D', '1W', '1M'];

  const assets = [
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      color: '#F7931A',
      chartData: [62000, 62500, 61800, 62200, 63000, 62800, 63500, 63200, 64000, 63800, 64200, 64500]
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      color: '#627EEA',
      chartData: [3200, 3180, 3220, 3250, 3230, 3280, 3300, 3320, 3350, 3330, 3370, 3400]
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      color: '#00FFA3',
      chartData: [180, 182, 178, 185, 190, 188, 192, 195, 198, 200, 205, 210]
    },
    { 
      symbol: 'XRP', 
      name: 'Ripple', 
      color: '#23292F',
      chartData: [0.60, 0.62, 0.61, 0.63, 0.64, 0.63, 0.65, 0.66, 0.67, 0.66, 0.68, 0.69]
    },
  ];

  const liveTrades = [
    { pair: 'BTC/USDT', side: 'buy', amount: '2.45', price: '64,823', time: '10:23:45' },
    { pair: 'ETH/USDT', side: 'sell', amount: '15.8', price: '3,412', time: '10:23:42' },
    { pair: 'SOL/USDT', side: 'buy', amount: '250', price: '208', time: '10:23:39' },
    { pair: 'XRP/USDT', side: 'buy', amount: '5000', price: '0.68', time: '10:23:36' },
    { pair: 'ADA/USDT', side: 'sell', amount: '1200', price: '0.52', time: '10:23:33' },
  ];

  const marketIndicators = [
    { label: 'Fear & Greed', value: '72', level: 'Greed', color: 'text-emerald-400' },
    { label: 'Market Sentiment', value: 'Bullish', level: 'High', color: 'text-emerald-400' },
    { label: 'Volatility', value: 'Medium', level: '2.4%', color: 'text-yellow-400' },
    { label: 'Liquidity', value: 'High', level: '$4.2B', color: 'text-blue-400' },
  ];

  const [prices, setPrices] = useState({
    BTC: { price: 64523.45, change: 2.34, volume: '32.4B' },
    ETH: { price: 3412.80, change: 1.23, volume: '18.7B' },
    SOL: { price: 208.65, change: 5.67, volume: '4.2B' },
    XRP: { price: 0.6834, change: 0.45, volume: '2.1B' },
  });

  const selectedAssetData = assets.find(a => a.symbol === selectedAsset) || assets[0];

  // Simulate real-time updates
  useEffect(() => {
    const updatePrices = () => {
      setIsLoading(true);
      setPrices(prev => ({
        BTC: { 
          price: prev.BTC.price * (1 + (Math.random() * 0.02 - 0.01)), 
          change: Math.random() * 4 - 2,
          volume: '32.4B'
        },
        ETH: { 
          price: prev.ETH.price * (1 + (Math.random() * 0.02 - 0.01)), 
          change: Math.random() * 3 - 1.5,
          volume: '18.7B'
        },
        SOL: { 
          price: prev.SOL.price * (1 + (Math.random() * 0.03 - 0.015)), 
          change: Math.random() * 6 - 3,
          volume: '4.2B'
        },
        XRP: { 
          price: prev.XRP.price * (1 + (Math.random() * 0.01 - 0.005)), 
          change: Math.random() * 2 - 1,
          volume: '2.1B'
        },
      }));
      
      const now = new Date();
      setLastUpdate(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`);
      
      setTimeout(() => setIsLoading(false), 300);
    };

    const interval = setInterval(updatePrices, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generate chart points
  const generateChartPoints = (data: number[]) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    return data.map((value, index) => ({
      x: (index / (data.length - 1)) * 100,
      y: 100 - ((value - min) / range) * 100,
      value
    }));
  };

  const chartPoints = generateChartPoints(selectedAssetData.chartData);

  return (
    <section className="relative py-24 pt-12 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black" id='markets'>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Data Stream Lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              top: `${i * 5}%`,
              width: '100%',
              animation: `streamFlow ${3 + i * 0.2}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}

        {/* Floating Data Points */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: Math.random() > 0.5 ? '#3b82f6' : '#10b981',
              opacity: 0.1,
              animation: `floatUp ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '+2.34%' : '-1.23%'}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium">LIVE MARKET DATA</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Real-Time
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Market Intelligence
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Track live prices, analyze trends, and make informed decisions with our advanced market analytics.
            </p>
          </div>

          {/* Last Update & Refresh */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Activity className="w-4 h-4" />
                <span>Last Update</span>
              </div>
              <div className="text-white font-mono text-lg">{lastUpdate}</div>
            </div>
            <button
              onClick={() => setIsLoading(true)}
              className={`p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 ${
                isLoading ? 'animate-spin' : ''
              }`}
            >
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Asset Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Markets</h3>
              
              <div className="space-y-3">
                {assets.map((asset) => {
                  const priceData = prices[asset.symbol as keyof typeof prices];
                  return (
                    <div
                      key={asset.symbol}
                      className={`group relative cursor-pointer transition-all duration-300 ${
                        selectedAsset === asset.symbol ? 'scale-[1.02]' : ''
                      }`}
                      onClick={() => setSelectedAsset(asset.symbol)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${selectedAsset === asset.symbol ? 'from-blue-500/20 to-emerald-500/20' : 'from-transparent to-transparent'} rounded-2xl blur-lg transition-all duration-500`}></div>
                      <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${
                        selectedAsset === asset.symbol 
                          ? 'border-blue-500/50' 
                          : 'border-gray-700/50 group-hover:border-gray-600/50'
                      } rounded-2xl p-5 transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: asset.color }}
                            >
                              <span className="font-bold text-white">{asset.symbol.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-bold text-white">{asset.symbol}</div>
                              <div className="text-sm text-gray-400">{asset.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white">
                              ${priceData.price.toLocaleString(undefined, {
                                minimumFractionDigits: asset.symbol === 'XRP' ? 4 : 2,
                                maximumFractionDigits: asset.symbol === 'XRP' ? 4 : 2,
                              })}
                            </div>
                            <div className={`flex items-center justify-end gap-1 ${
                              priceData.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                            }`}>
                              {priceData.change >= 0 ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              <span className="font-semibold">
                                {priceData.change >= 0 ? '+' : ''}{priceData.change.toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="h-12 mt-2">
                          <svg className="w-full h-full" viewBox="0 0 100 40">
                            <defs>
                              <linearGradient id={`miniGradient-${asset.symbol}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={asset.color} stopOpacity="0.3" />
                                <stop offset="100%" stopColor={asset.color} stopOpacity="0.1" />
                              </linearGradient>
                            </defs>
                            <path
                              d={generateChartPoints(asset.chartData)
                                .map((p, i, arr) => 
                                  `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
                                )
                                .join(' ')}
                              fill="none"
                              stroke={asset.color}
                              strokeWidth="2"
                            />
                            <path
                              d={`M 0 40 ${generateChartPoints(asset.chartData)
                                .map(p => `L ${p.x} ${p.y}`)
                                .join(' ')} L 100 40 Z`}
                              fill={`url(#miniGradient-${asset.symbol})`}
                            />
                          </svg>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-400 mt-2">
                          <span>24h Vol: {priceData.volume}</span>
                          <span className="group-hover:text-blue-400 transition-colors">
                            {selectedAsset === asset.symbol ? 'Viewing' : 'View'} →
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Middle Column - Main Chart */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 h-full">
              {/* Chart Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: selectedAssetData.color }}
                    >
                      <span className="font-bold text-white text-xl">{selectedAssetData.symbol.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedAssetData.name}</h3>
                      <div className="text-gray-400">{selectedAssetData.symbol}/USD</div>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-white mt-2">
                    ${prices[selectedAsset as keyof typeof prices].price.toLocaleString(undefined, {
                      minimumFractionDigits: selectedAsset === 'XRP' ? 4 : 2,
                      maximumFractionDigits: selectedAsset === 'XRP' ? 4 : 2,
                    })}
                  </div>
                  <div className={`text-xl font-semibold ${
                    prices[selectedAsset as keyof typeof prices].change >= 0 
                      ? 'text-emerald-400' 
                      : 'text-red-400'
                  }`}>
                    {prices[selectedAsset as keyof typeof prices].change >= 0 ? '+' : ''}
                    {prices[selectedAsset as keyof typeof prices].change.toFixed(2)}%
                  </div>
                </div>

                {/* Timeframe Selector */}
                <div className="flex gap-2">
                  {timeframes.map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setActiveTimeframe(tf)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeTimeframe === tf
                          ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800/80'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Chart */}
              <div ref={chartRef} className="relative h-80 mb-8">
                {/* Chart Grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-5">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="border border-gray-700/20"
                    />
                  ))}
                </div>

                {/* Chart Line */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="mainChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={selectedAssetData.color} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={selectedAssetData.color} stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="mainChartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={selectedAssetData.color} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={selectedAssetData.color} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area Fill */}
                  <path
                    d={`M 0 100 ${chartPoints.map(p => `L ${p.x} ${p.y}`).join(' ')} L 100 100 Z`}
                    fill="url(#mainChartFill)"
                  />
                  
                  {/* Chart Line */}
                  <path
                    d={`M 0 ${chartPoints[0].y} ${chartPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}`}
                    fill="none"
                    stroke="url(#mainChartGradient)"
                    strokeWidth="3"
                    className="animate-draw"
                  />

                  {/* Data Points */}
                  {chartPoints.filter((_, i) => i % 2 === 0).map((point, i) => (
                    <g key={i}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill={selectedAssetData.color}
                        className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                      />
                      <text
                        x={point.x}
                        y={point.y - 15}
                        textAnchor="middle"
                        className="text-xs fill-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      >
                        ${point.value.toLocaleString()}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Current Price Line */}
                <div 
                  className="absolute left-0 right-0 h-px bg-emerald-500/50"
                  style={{ top: '50%' }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                    Current: ${prices[selectedAsset as keyof typeof prices].price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Chart Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {marketIndicators.map((indicator) => (
                  <div key={indicator.label} className="bg-gray-800/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">{indicator.label}</div>
                    <div className={`text-2xl font-bold ${indicator.color} mb-1`}>{indicator.value}</div>
                    <div className="text-xs text-gray-500">{indicator.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes streamFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes floatUp {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          100% { 
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default MarketData;