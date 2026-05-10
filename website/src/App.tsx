import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import DocLayout from './layouts/DocLayout'
import HomePage from './pages/Home'
import QuickStart from './pages/docs/QuickStart'
import EnvVars from './pages/docs/EnvVars'
import ThirdPartyModels from './pages/docs/ThirdPartyModels'
import GlobalUsage from './pages/docs/GlobalUsage'
import Faq from './pages/docs/Faq'
import Commands from './pages/docs/Commands'
import Tools from './pages/docs/Tools'
import HardDeny from './pages/docs/HardDeny'
import HtmlOutput from './pages/docs/HtmlOutput'
import Skills from './pages/docs/Skills'
import Mcp from './pages/docs/Mcp'
import ProjectStructure from './pages/docs/ProjectStructure'
import Differences from './pages/docs/Differences'
import './index.css'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<DocLayout />}>
          <Route path="/guide/quick-start" element={<QuickStart />} />
          <Route path="/guide/env-vars" element={<EnvVars />} />
          <Route path="/guide/third-party-models" element={<ThirdPartyModels />} />
          <Route path="/guide/global-usage" element={<GlobalUsage />} />
          <Route path="/guide/faq" element={<Faq />} />
          <Route path="/features/commands" element={<Commands />} />
          <Route path="/features/tools" element={<Tools />} />
          <Route path="/features/hard-deny" element={<HardDeny />} />
          <Route path="/features/html-output" element={<HtmlOutput />} />
          <Route path="/features/skills" element={<Skills />} />
          <Route path="/features/mcp" element={<Mcp />} />
          <Route path="/reference/project-structure" element={<ProjectStructure />} />
          <Route path="/reference/differences" element={<Differences />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
