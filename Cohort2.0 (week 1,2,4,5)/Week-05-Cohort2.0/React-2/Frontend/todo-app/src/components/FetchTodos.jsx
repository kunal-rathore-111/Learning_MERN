

export function FetchT({ todos }) {
    return <div>

        {todos.map(function (t) {
            return <div>
                <h1>{t.title}</h1>
                <h2>{t.discription}</h2>
                <button>{t.completed == true ? "completed" : "mark as completed"}</button>
            </div>
        })
        }
    </div>
}