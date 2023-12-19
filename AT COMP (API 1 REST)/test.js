function requireProduct() {
  const url = "https://lojafalsaapi.com/produtos?ordenar=dec&limite=20";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// https://lojafalsaapi.com/produtos?ordenar=dec&limite=20