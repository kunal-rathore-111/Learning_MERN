


export function CreateT() {


    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");

    return <div style={{ margin: "20px" }}>

        <input type="text" id="title" placeholder={"enter title"} onChange={function (e) {
            const value = e.target.value;
            setTitle(value);
        }} /> <br /><br />

        <input type="text" id="discription" placeholder={"enter discription"} onChange={function (e) {
            const value = e.target.value;
            setDiscription(value);
        }} /> <br /><br />

        <button onClick={
            async function () {

                const res = await fetch("http://localhost:3000/fetch", { method: "POST", body: JSON.stringify({ title: title, discription: discription }), headers: { "contentType": "application/json" } });

                const ans = await res.json();
                alert("Todo added ");


            }
        }> Add task</button>

    </div >
}