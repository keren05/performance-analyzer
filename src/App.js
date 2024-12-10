import React, { useState } from 'react';
import { UploadCloud, Zap, AlertTriangle } from 'lucide-react';


const analyzePerformance = (codeSnippet) => {
  const suggestions = [];
  
  
  const performanceChecks = [
    {
      check: () => /for\s*\(let\s+i\s*=\s*0;/.test(codeSnippet),
      message: "Consider using .forEach(), .map(), or .filter() for better readability and potential performance.",
      severity: 'warning'
    },
    {
      check: () => /\.push\(\)/.test(codeSnippet),
      message: "Large array mutations with .push() can be inefficient. Consider using spread operator or Array.concat().",
      severity: 'warning'
    },
    {
      check: () => /JSON\.parse\(\s*JSON\.stringify/.test(codeSnippet),
      message: "Deep cloning with JSON methods is slow. Use structured clone or a library like lodash for complex objects.",
      severity: 'warning'
    },
    {
      check: () => /O\(n\^2\)/.test(codeSnippet),
      message: "Detected potential quadratic time complexity. Look for more efficient algorithms.",
      severity: 'critical'
    }
  ];

  performanceChecks.forEach(check => {
    if (check.check()) {
      suggestions.push({
        message: check.message,
        severity: check.severity
      });
    }
  });

  
  const lines = codeSnippet.split('\n');
  const computationMap = {};
  lines.forEach((line, index) => {
    const computationMatch = line.match(/(\w+\s*=\s*[^;]+)/);
    if (computationMatch) {
      const computation = computationMatch[1];
      if (computationMap[computation]) {
        suggestions.push({
          message: `Potential repeated computation detected on lines ${computationMap[computation]} and ${index + 1}. Consider caching the result.`,
          severity: 'warning'
        });
      } else {
        computationMap[computation] = index + 1;
      }
    }
  });

  return suggestions;
};

const AIPerformanceAnalyzer = () => {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalyze = () => {
    const suggestions = analyzePerformance(codeSnippet);
    setAnalysisResults(suggestions);
  };

  const severityColors = {
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800'
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Zap className="mr-2 text-blue-500" /> AI Performance Analyzer
      </h1>
      
      <div className="mb-4">
        <textarea 
          className="w-full p-3 border rounded-lg min-h-[200px] font-mono text-sm"
          placeholder="Paste your code snippet here..."
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
        />
      </div>
      
      <button 
        onClick={handleAnalyze}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        <UploadCloud className="mr-2" /> Analyze Performance
      </button>

      {analysisResults && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          {analysisResults.length === 0 ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center">
              <Zap className="mr-2" /> No performance bottlenecks detected!
            </div>
          ) : (
            <div className="space-y-3">
              {analysisResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg flex items-center ${severityColors[result.severity]}`}
                >
                  <AlertTriangle className="mr-2" />
                  {result.message}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIPerformanceAnalyzer;