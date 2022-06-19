new gridjs.Grid({
    columns: ["Nama Barang", "Jenis Barang", "Kode Barang"],
    data: [
      ["Aqua", "Minuman", "001"],
      ["Bubur kemasan", "Makanan", "002"],
      ["Sosis", "Makanan", "003"],
      ["Fanta", "Minuman", "004"],
      ["Sarden", "Makanan", "005"]
    ]
  }).render(document.getElementById("wrapper"));


function helloWorld () {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ['Nama barang', 'Jenis barang', 'Kode Barang'],
    data: [
      ['Aqua', 'Minuman', '001'],
      ['Bubur kemasan', 'Makanan', '002']
    ]
  });
  
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return ref={wrapperRef};
}