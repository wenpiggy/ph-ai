import React, { useState, useEffect, useCallback } from 'react';
import { AppView, AnalyzedPhoto, PhotoFeedback, Tutorial } from './types';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView'; // Import HomeView
import AnalysisView from './views/AnalysisView';
import TutorialsView from './views/TutorialsView';
import HistoryView from './views/HistoryView';
import { TUTORIAL_DATA } from './constants'; 

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.Home); // Default to Home
  const [analyzedPhotos, setAnalyzedPhotos] = useState<AnalyzedPhoto[]>([]);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [apiKeyError, setApiKeyError] = useState<string>('');

  useEffect(() => {
    const envApiKey = process.env.API_KEY;
    if (envApiKey) {
      setApiKey(envApiKey);
    } else {
      console.warn("API_KEY not found in process.env. This app requires an API key to function fully.");
      setApiKeyError("API 키가 설정되지 않았습니다. API_KEY 환경 변수를 설정해주세요.");
    }
  }, []);


  useEffect(() => {
    const storedPhotos = localStorage.getItem('analyzedPhotos');
    if (storedPhotos) {
      try {
        setAnalyzedPhotos(JSON.parse(storedPhotos));
      } catch (error) {
        console.error("저장된 사진을 파싱하는 중 오류 발생:", error);
        localStorage.removeItem('analyzedPhotos'); 
      }
    }
  }, []);

  const saveAnalyzedPhotos = useCallback((photos: AnalyzedPhoto[]) => {
    setAnalyzedPhotos(photos);
    try {
      localStorage.setItem('analyzedPhotos', JSON.stringify(photos));
    } catch (error) {
      console.error("localStorage에 사진 저장 중 오류 발생:", error);
    }
  }, []);

  const addAnalyzedPhoto = useCallback((photoDataUrl: string, feedback: PhotoFeedback | null, error?: string) => {
    const newPhoto: AnalyzedPhoto = {
      id: Date.now().toString(),
      imageDataUrl: photoDataUrl,
      feedback,
      analysisError: error,
      timestamp: Date.now(),
    };
    saveAnalyzedPhotos([newPhoto, ...analyzedPhotos]);
  }, [analyzedPhotos, saveAnalyzedPhotos]);

  const deleteAnalyzedPhoto = useCallback((id: string) => {
    saveAnalyzedPhotos(analyzedPhotos.filter(photo => photo.id !== id));
  }, [analyzedPhotos, saveAnalyzedPhotos]);

  const clearHistory = useCallback(() => {
    saveAnalyzedPhotos([]);
  }, [saveAnalyzedPhotos]);


  const renderView = () => {
    if (apiKeyError && currentView === AppView.Analyze) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-red-500 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
          </svg>
          <h2 className="text-2xl font-semibold text-slate-700 mb-2">API 키 오류</h2>
          <p className="text-slate-600">{apiKeyError}</p>
          <p className="text-sm text-slate-500 mt-2">분석 기능이 비활성화되었습니다. API 키가 올바르게 설정되었는지 확인해주세요.</p>
        </div>
      );
    }

    switch (currentView) {
      case AppView.Home:
        return <HomeView setCurrentView={setCurrentView} />;
      case AppView.Analyze:
        return <AnalysisView addAnalyzedPhoto={addAnalyzedPhoto} apiKey={apiKey} />;
      case AppView.Tutorials:
        return <TutorialsView tutorials={TUTORIAL_DATA} />;
      case AppView.History:
        return <HistoryView photos={analyzedPhotos} onDeletePhoto={deleteAnalyzedPhoto} onClearHistory={clearHistory} />;
      default:
        return <HomeView setCurrentView={setCurrentView} />; // Fallback to Home
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>
      <footer className="bg-slate-800 text-slate-300 text-center p-4 text-sm">
        © {new Date().getFullYear()} 포토멘토 AI. 모든 권리 보유.
      </footer>
    </div>
  );
};

export default App;