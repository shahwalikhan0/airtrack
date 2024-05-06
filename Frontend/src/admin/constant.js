

export const bookingColumns = (flights, passengers) => {
  const totalSeats = 250;
  const passengerColumnsConfig = passengerColumns(passengers);

  const passengerNameColumn = passengerColumnsConfig.find(
    (col) => col.dataIndex === 'name'
  );

  const flightColumnsConfig = flightColumns(flights);

  const departureFilters = flightColumnsConfig.find(
    (col) => col.dataIndex === 'departure'
  ).filters;

  const destinationFilters = flightColumnsConfig.find(
    (col) => col.dataIndex === 'destination'
  ).filters;

  return [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Departure",
      dataIndex: "departure",
      key: "departure",
      filters: departureFilters,
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.departure.includes(value),
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
      filterMode: "multiple",
      filterSearch: true,
      filters: destinationFilters,
      onFilter: (value, record) => record.destination.includes(value),
    },
    {
      title: "Flight Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Booked Seats", // New column to show booked seats
      key: "booked_seats",
      render: (record) => totalSeats - record.seats_remaining, // Computation for booked seats
      sorter: (a, b) => (totalSeats - a.seats_remaining) - (totalSeats - b.seats_remaining),
    },
  ];
};

export const flightColumns = (flights) => {
  const uniqueDestinations = new Set(
    flights.map((flight) => flight.destination)
  );
  const uniqueDepartures = new Set(flights.map((flight) => flight.departure));

  const destinationFilters = Array.from(uniqueDestinations).map(
    (destination) => ({
      text: destination,
      value: destination,
    })
  );

  const departureFilters = Array.from(uniqueDepartures).map((departure) => ({
    text: departure,
    value: departure,
  }));

  return [
    {
      title: "Flight ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Destination Airport",
      dataIndex: "destination",
      key: "destination",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.destination.includes(value),
      filters: destinationFilters,
    },
    {
      title: "Departure Airport",
      dataIndex: "departure",
      key: "departure",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.departure.includes(value),
      filters: departureFilters,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "Total Seats",
      dataIndex: "seats",
      key: "seats",
    },
    {
      title: "Seats Remaining",
      dataIndex: "seats_remaining",
      key: "seats_remaining",
      sorter: (a, b) => a.seats_remaining - b.seats_remaining,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
  ];
};

export const inventoryColumns = (inventory) => {
  const uniqueItems = new Set(inventory.map((item) => item.item_name));
  const itemFilters = Array.from(uniqueItems).map((item) => ({
    text: item,
    value: item,
  }));
  return [
    {
      title: "Item ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Item Name",
      dataIndex: "item_name",
      key: "item_name",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.item_name.includes(value),
      filters: itemFilters,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
  ];
};

export const passengerColumns = (passengers) => {
  const uniqueUsername = new Set(
    passengers.map((passenger) => passenger.username)
  );

  const usernameFilters = Array.from(uniqueUsername).map((username) => ({
    text: username,
    value: username,
  }));

  const isPrimeFilters = [
    { text: "Yes", value: true },
    { text: "No", value: false },
  ];

  return [
    {
      title: "Passenger ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.username.includes(value),
      filters: usernameFilters,
    },
    {
      title: "Passport Number",
      dataIndex: "passportNumber",
      key: "passportNumber",
    },
    {
      title: "Is Prime",
      dataIndex: "isPrime",
      key: "isPrime",
      render: (isPrime) => (isPrime ? "Yes" : "No"),
      filters: isPrimeFilters,
      onFilter: (value, record) => record.isPrime === value,
    },
  ];
};
export const revenueColumns = (revenue) => {
  const uniqueType = new Set(revenue.map((revenue) => revenue.type));
  const typeFilters = Array.from(uniqueType).map((type) => ({
    text: type,
    value: type,
  }));

  return [
    {
      title: "Flight ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Revenue Type",
      dataIndex: "type",
      key: "type",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.type.includes(value),
      filters: typeFilters,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
  ];
};

export const couponColumns = (coupon) => {
  const uniqueDiscountCode = new Set(
    coupon.map((coupon) => coupon.discountCode)
  );
  const discountCodeFilters = Array.from(uniqueDiscountCode).map(
    (discountCode) => ({
      text: discountCode,
      value: discountCode,
    })
  );

  return [
    {
      title: "Coupon ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Discount Code",
      dataIndex: "discountCode",
      key: "discountCode",
      filterMode: "multiple",
      filterSearch: true,
      onFilter: (value, record) => record.discountCode.includes(value),
      filters: discountCodeFilters,
    },
    {
      title: "Discount Percent",
      dataIndex: "discount_percent",
      key: "discount_percent",
      sorter: (a, b) => a.discount_percent - b.discount_percent,
    },
  ];
};
