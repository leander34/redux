import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as CourseActions from '../../store/actions/course'


export default function Sidebar() {
    const dispatch = useDispatch()
    const modules = useSelector(state => state.course.modules)

    
  return (
    <aside>
        { modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={(e) => dispatch(CourseActions.toggleLesson(module, lesson))}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
  )
}
