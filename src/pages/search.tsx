import { useState } from "react";
import ProductCard from "../components/product-card";
import { useSearchParams } from "react-router-dom";
import { Button, Dropdown, Input, Pagination, Select, Slider } from "antd";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const searchQuery = useSearchParams()[0];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState(
    searchQuery.get("category") || "Category"
  );
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  console.log(
    "search:",
    search,
    "sort:",
    sort,
    "maxPrice:",
    maxPrice,
    "category:",
    category,
    "page:",
    page
  );

  return (
    <div style={{ marginLeft: "40px", marginRight: "40px" }}>
      <h4>Filters</h4>
      <div style={{ display: "flex", gap: "10px" }}>
        <Select
          style={{ width: "120px" }}
          options={[
            { value: "Sample1", label: <span>Sample1</span> },
            { value: "Sample2", label: <span>Sample2</span> },
          ]}
          value={category}
          onChange={(value) => setCategory(value)}
        />

        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <div style={{ width: "200px" }}>
                    <div className="d-flex">
                      <h6>100$</h6>
                      <h6 style={{ flex: "1", textAlign: "end" }}>
                        {maxPrice}$
                      </h6>
                    </div>
                    <Slider
                      defaultValue={100000}
                      min={100}
                      max={100000}
                      onChange={(value) => setMaxPrice(value)}
                    />
                  </div>
                ),
              },
            ],
          }}
          placement="bottomLeft"
          arrow
        >
          <Button>MaxPrice</Button>
        </Dropdown>

        <Button onClick={() => setSort("asc")}>Price (Low to High)</Button>
        <Button onClick={() => setSort("dsc")}>Price (High to Low)</Button>
      </div>
      <h4 style={{ marginTop: "8px", marginBottom: "20px" }}>Search</h4>
      <div>
        <Input
          prefix={<IoIosSearch />}
          placeholder="Search..."
          style={{ borderRadius: 100, width: "40%" }}
          size="middle"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />

        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
        <ProductCard
          productId="123"
          name="Macbook"
          price={888}
          stock={8}
          handler={addToCartHandler}
          photo="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        />
      </div>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        current={page}
        style={{ marginBottom: "20px" }}
        onChange={(currentPage) => setPage(currentPage)}
      />
    </div>
  );
};

export default Search;
