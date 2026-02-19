import { useState, useEffect } from 'react'
import './App.css'

interface Subject {
  id: number
  name: string
  icon: string
  progress: number
}

interface UserProfile {
  name: string
  series: number
  level: number
  totalXP: number
  streak: number
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null)

  useEffect(() => {
    // Carregar dados do usuário
    const mockUser: UserProfile = {
      name: 'João Silva',
      series: 5,
      level: 1,
      totalXP: 0,
      streak: 0,
    }

    const mockSubjects: Subject[] = [
      { id: 1, name: 'Matemática', icon: '🔢', progress: 25 },
      { id: 2, name: 'Português', icon: '📖', progress: 15 },
      { id: 3, name: 'Ciências', icon: '🔬', progress: 10 },
      { id: 4, name: 'História', icon: '📜', progress: 20 },
      { id: 5, name: 'Geografia', icon: '🌍', progress: 5 },
      { id: 6, name: 'Inglês', icon: '🇬🇧', progress: 0 },
    ]

    setUser(mockUser)
    setSubjects(mockSubjects)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">🎓</span>
              <h1>Reforço Escolar Inteligente</h1>
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-level">Nível {user?.level}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* User Stats */}
        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-label">XP Total</div>
              <div className="stat-value">{user?.totalXP}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <div className="stat-label">Sequência</div>
              <div className="stat-value">{user?.streak} dias</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <div className="stat-label">Série</div>
              <div className="stat-value">{user?.series}º Ano</div>
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="subjects">
          <h2>Suas Matérias</h2>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`subject-card ${selectedSubject === subject.id ? 'active' : ''}`}
                onClick={() => setSelectedSubject(subject.id)}
              >
                <div className="subject-icon">{subject.icon}</div>
                <div className="subject-info">
                  <h3>{subject.name}</h3>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{subject.progress}% concluído</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Subject Details */}
        {selectedSubject && (
          <section className="subject-details">
            <h2>
              {subjects.find((s) => s.id === selectedSubject)?.name}
            </h2>
            <div className="phases">
              <div className="phase-card">
                <div className="phase-icon">🟢</div>
                <h3>Fácil</h3>
                <p>Desbloqueado</p>
                <button className="btn btn-primary">Começar</button>
              </div>
              <div className="phase-card">
                <div className="phase-icon">🟡</div>
                <h3>Médio</h3>
                <p>Desbloqueado</p>
                <button className="btn btn-primary">Começar</button>
              </div>
              <div className="phase-card">
                <div className="phase-icon">🔴</div>
                <h3>Difícil</h3>
                <p>Desbloqueado</p>
                <button className="btn btn-primary">Começar</button>
              </div>
              <div className="phase-card disabled">
                <div className="phase-icon">⚫</div>
                <h3>Desafio</h3>
                <p>Bloqueado - 300 XP</p>
                <button className="btn btn-secondary" disabled>
                  Bloqueado
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Reforço Escolar Inteligente. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
