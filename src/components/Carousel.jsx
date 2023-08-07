import ButtonWithOutline from "./ButtonWithOutline";

export default function Carousel({ products }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product, idx) => (
            <a key={idx} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={product.imageSrc}
                  className="m-auto object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-center  text-center font-medium text-gray-900">
                <h3 className="text-white text-2xl">{product.name}</h3>
              </div>
              <p className="mt-1 text-sm text-center text-gray-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-10 h-50vh">
        <ButtonWithOutline text={"MINT FAM PASS"} />
      </div>
    </div>
  );
}
