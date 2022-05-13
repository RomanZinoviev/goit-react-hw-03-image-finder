export const Button = ({ page, handleButton }) => {
    return(<><button type="button" onClick={()=>{handleButton(page)}}>Load more</button></>)
}