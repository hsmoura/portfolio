import "./product.scss"

export default function Product({img}) {
  return (
    
      <div className="product" id="product">
        <img src={img} alt="" />
      </div>
    
  )
}
