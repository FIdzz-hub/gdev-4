import './assets/css/TodoList.css'
import ProfileCard from './component/ProfileCard'
import TodoCard from './component/TodoCard'

const TodoList = () => {
    return (
        <div>
            <section className="app-container">
                <ProfileCard />
                <TodoCard />
            </section>
        </div>
    )
}

export default TodoList