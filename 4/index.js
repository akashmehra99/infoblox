document.addEventListener("DOMContentLoaded", () => {
  getData();
});

function getData() {
  const container = document.getElementById("container");
  const loader = document.getElementById('loader');
  if (container) {
    const mockData = {
      automobiles: [
        { mpg: 25, price: 11000, name: "Small" },
        { mpg: 16, price: 36400, name: "Sports" },
        { mpg: 25, price: 16500, name: "Compact" },
        { mpg: 22, price: 72000, name: "Luxury" },
      ],
    };
    fetch('example.com/automobile/list').then(() => {
        const ul = document.createElement('ul');
        mockData.automobiles.forEach((data) => {
            const li = document.createElement('li');
            li.innerText = `MPG: ${data.mpg} , PRICE: ${data.price}, NAME: ${data.name}`
            ul.appendChild(li);
        });
        container.removeChild(loader);
        container.append(ul);
    })
  }
}
