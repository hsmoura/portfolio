import "./product.scss"

export default function Product({img}) {
  return (
    <div className="product" id="productm">
        <img src={img} alt="" />
    </div>
  )
}
