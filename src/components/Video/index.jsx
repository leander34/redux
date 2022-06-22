import { useSelector } from 'react-redux'

export default function Video() {
    const { activeModule, activeLesson } = useSelector(state => state.course)
  return (
    <div>
        <strong>Módulo {activeModule?.title}</strong> <br />
        <span>Aula {activeLesson?.title}</span>
    </div>
  )
}
