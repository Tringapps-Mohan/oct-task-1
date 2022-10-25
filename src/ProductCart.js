import InputBox from "./InputBox";
import SelectBox from "./SelectBox";
import './productCart.css';
function ProductCart(){
    return (
        <div className="productCart">
        <SelectBox/><InputBox placeHolder="Quantity"/><InputBox placeHolder="price" readOnly={true} /><InputBox placeHolder="total" readOnly={true} type="total" />
        </div>
    );
}

export default ProductCart;