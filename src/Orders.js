import React from "react";

// Sample data for the orders
const ordersData = [
  {
    orderNumber: "#A915AFLE4FO",
    date: "Aug 5th, 2017",
    total: "$19.54",
    shippedTo: "Late M. Night",
    status: "Shipped",
    deliveryEstimate: "Est. delivery between Aug 5 – Aug 9th, 2017",
    items: [
      {
        imgSrc: "https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffc79d08c12dc.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=c9a50d474788f2658d13b21aa62edd6c",
        title: "1 x URGE Basics iPhone 6/iPhone 6 Plus Magnetic Wallet Case",
        color: "Red",
        size: "L",
        price: "$19.54",
      },
      // Add more items if necessary
    ],
  },
  // Add more orders if necessary
];

// OrderItem component to represent each item in an order
const OrderItem = ({ imgSrc, title, color, size, price }) => (
  <div className="row no-gutters mt-3">
    <div className="col-3 col-md-1">
      <img className="img-fluid pr-3" src={imgSrc} alt="" />
    </div>
    <div className="col-9 col-md-8 pr-0 pr-md-3">
      <h6 className="text-charcoal mb-2 mb-md-1">
        <a href="#" className="text-charcoal">{title}</a>
      </h6>
      <ul className="list-unstyled text-pebble mb-2 small">
        <li><b>Color:</b> {color}</li>
        <li><b>Size:</b> {size}</li>
      </ul>
      <h6 className="text-charcoal text-left mb-0 mb-md-2"><b>{price}</b></h6>
    </div>
    <div className="col-12 col-md-3 hidden-sm-down">
      <a href="#" className="btn btn-secondary w-100 mb-2">Buy It Again</a>
      <a href="#" className="btn btn-secondary w-100">Request a Return</a>
    </div>
  </div>
);

// Order component to represent the order details
const Order = ({ order }) => (
  <div className="list-group mb-5">
    <div className="list-group-item p-3 bg-snow" style={{ position: 'relative' }}>
      <div className="row w-100 no-gutters">
        <div className="col-6 col-md">
          <h6 className="text-charcoal mb-0 w-100">Order Number</h6>
          <a href="#" className="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.orderNumber}</a>
        </div>
        <div className="col-6 col-md">
          <h6 className="text-charcoal mb-0 w-100">Date</h6>
          <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.date}</p>
        </div>
        <div className="col-6 col-md">
          <h6 className="text-charcoal mb-0 w-100">Total</h6>
          <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.total}</p>
        </div>
        <div className="col-6 col-md">
          <h6 className="text-charcoal mb-0 w-100">Shipped To</h6>
          <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">{order.shippedTo}</p>
        </div>
        <div className="col-12 col-md-3">
          <a href="#" className="btn btn-primary w-100">View Order</a>
        </div>
      </div>
    </div>
    <div className="list-group-item p-3 bg-white">
      <div className="row no-gutters">
        <div className="col-12 col-md-9 pr-0 pr-md-3">
          <div className="alert p-2 alert-success w-100 mb-0">
            <h6 className="text-green mb-0"><b>{order.status}</b></h6>
            <p className="text-green hidden-sm-down mb-0">{order.deliveryEstimate}</p>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <a href="#" className="btn btn-secondary w-100 mb-2">Track Shipment</a>
        </div>
      </div>
      {order.items.map((item, index) => (
        <OrderItem key={index} {...item} />
      ))}
    </div>
  </div>
);

// Orders component to map over the orders data and render each order
const Orders = () => (
  <div className="container mt-3 mt-md-5">
    <h2 className="text-charcoal hidden-sm-down">Your Orders</h2>
    <h5 className="text-charcoal hidden-md-up">Your Orders</h5>
    <div className="row">
      <div className="col-12">
        {ordersData.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  </div>
);

// Header component
const Header = () => (
  <div className="container-fluid px-0 bg-black">
    <div className="container px-0">
      <nav className="tanga-header navbar navbar-toggleable-sm justify-content-center">
        <div className="navbar-collapse text-center">
          <a className="navbar-brand mr-4" href="#">
            <img
              src="https://dealqueue.tanganetwork.com/images/logo-506c0d3ed2d6fe57bd44a49118fd1939.png"
              height="30"
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  </div>
);

// MobileNav component
const MobileNav = () => (
  <div className="mobile-nav hidden-md-up">
    <a href="#">
      <i className="fa fa-home"></i> Deals
    </a>
    <a href="#">
      <i className="fa fa-th-large"></i> Categories
    </a>
    <a href="#">
      <i className="fa fa-search"></i> Search
    </a>
    <a href="#" className="active">
      <i className="fa fa-shopping-cart"></i> Cart
    </a>
    <a href="#">
      <i className="fa fa-user"></i> Account
    </a>
  </div>
);

// Main component App
const App = () => (
  <div>
    <Header />
    <Orders />
    <MobileNav />
  </div>
);

export default App;
