1. Add link from react router dom.

2. Add to in link.

```js
 <Link to={`/${item.cioc}`}

```

NOTE -> This `{item.cioc}` is from API which we will import in component. This will come as / in hyper link.

3. Use useParams in the component where we need to call.

-Object.values

```js
const object1 = {
  a: "some string",
  b: 42,
  c: false,
};

<span>
  {Object.values(countrySearched[0].currencies)
    .map((item) => {
      return item.name;
    })
    .join(",")}
</span>
// expected result = EUR, INR ,ETV, TYG

console.log(Object.values(object1));
// Expected output: Array ["some string", 42, false]
```
