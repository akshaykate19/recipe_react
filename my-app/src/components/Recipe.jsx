export default function Recipe()
{
    return(
        <>
        <div style={{maxWidth:"600px",margin:"20px auto",border:"1px solid #ccc",padding:"20px"}}>
            <h1 style={{marginBottom:"20px",border:"1px solid #ccc",padding:"20px"}}>Recipe Book</h1>
            <form>
                <div style={{marginBottom:"10px"}}>
                    <label>Name: </label><br />
                    <input type="text" style={{width:"100%",padding:"5px"}} />
                </div>

                 <div style={{marginBottom:"10px"}}>
                    <label>Ingredients: </label><br />
                    <input type="text" style={{width:"100%",padding:"5px"}} />
                </div>

                 <div style={{marginBottom:"10px"}}>
                    <label>Instructions: </label><br />
                    <input type="text" style={{width:"100%",padding:"5px"}} />
                </div>
                <button style={{padding:"5px 10px"}} type="submit">
                    Add Recipe
                </button>
            </form>
        </div>
        </>
    )
}