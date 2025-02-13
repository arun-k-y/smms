// import React, { useEffect } from 'react';
// import {Container, Button } from 'reactstrap';

// function Home() {

//     useEffect(()=>{
//         document.title='Home';
//     });


//     return ( <div>

//         <div className="jumbotron">

//             <h1 > Go Shopping </h1>
//             <p>In this project, we have designed a simple shopping mall management system. The mall will provide a soothing shopping experience for customers, provide mall management functions to the mall administrators, and provide inventory and staff management to the shop owners at the mall.</p>

//             <Container>
//                 <Button color="primary" outline>
//                     Read More
//                 </Button>
//             </Container>

//         </div>


//     </div> );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';

function Home() {
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        document.title = 'Home';
    });

    const handleReadMoreClick = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <div className="jumbotron">
                <h1>Go Shopping</h1>
                <p>In this project, we have designed a simple shopping mall management system. The mall will provide a soothing shopping experience for customers, provide mall management functions to the mall administrators, and provide inventory and staff management to the shop owners at the mall.</p>

                <Container>
                    <Button color="primary" outline onClick={handleReadMoreClick}>
                        Read More
                    </Button>
                </Container>
                <p></p>
                {showMore && (
                    <div>

                        <p>
                            <h3>Features</h3>
                            **Customer-Facing Features:**
                            1. **User Registration and Login:** Customers should be able to create accounts and log in to access personalized features.

                            2. **Browsing and Searching:** Customers can browse through various shops, brands, and categories. They can also use search functionality to find specific items or shops.

                            3. **Product Listings:** Each shop should display its products along with details like name, description, price, and availability.

                            4. **Shopping Cart:** Customers can add items to their shopping carts, review the cart, and proceed to checkout.

                            5. **Checkout and Payment:** Customers should be able to review their order, select a payment method, and make payments securely.

                            6. **Order History:** Customers can view their past orders, order statuses, and track deliveries.

                            7. **Wishlist:** Customers can create and manage a wishlist of items they want to purchase in the future.

                            8. **User Reviews and Ratings:** Customers can provide feedback on products and shops through ratings and reviews.
                            <p></p>
                            <p>
                                **Mall Administrator Features:**
                                1. **Dashboard:** A centralized dashboard for administrators to monitor and manage various aspects of the mall.

                                2. **Shop Management:** Administrators can add, remove, or modify shops in the mall, including assigning shop spaces and managing lease agreements.

                                3. **Staff Management:** Administrators can manage staff hiring, scheduling, and payroll for common mall services (security, cleaning, etc.).

                                4. **Maintenance and Repairs:** Scheduling and tracking maintenance and repairs for common areas within the mall.

                                5. **Tenant Communications:** Facilitating communication between mall management and shop owners through announcements, alerts, and messages.

                                6. **Analytics and Reporting:** Generating reports on foot traffic, sales trends, and overall mall performance.
                            </p>
                            <p></p>
                            **Shop Owner Features:**
                            1. **Shop Profile:** Shop owners can create and manage their shop profiles, including descriptions, images, and contact information.

                            2. **Inventory Management:** Adding, updating, and removing products from the inventory, along with managing their availability.

                            3. **Order Fulfillment:** Processing customer orders, managing stock, and updating order statuses.

                            4. **Sales Analytics:** Viewing sales reports, order history, and trends to make informed business decisions.

                            5. **Promotions and Discounts:** Creating and managing promotional campaigns, sales, and discounts.

                            6. **Staff Management:** If applicable, managing their shop's staff, including scheduling and payroll.

                            Remember that security and data privacy should be paramount throughout the system. You'll likely need to implement user authentication and authorization mechanisms, data encryption, and secure payment gateways.

                            The technology stack you choose (programming languages, frameworks, databases, etc.) will depend on your team's expertise and project requirements. Regular testing and user feedback will also play a crucial role in refining and improving the system over time.
                        </p>

                        <h3>
                            Development
                        </h3>

                        1. **Database Design:**
                        - Design a database schema to store information about users, shops, products, orders, reviews, and other relevant entities.
                        - Ensure data normalization and establish relationships between different tables.
                        <p></p>
                        2. **Frontend Development:**
                        - Create user-friendly and responsive user interfaces for customers, administrators, and shop owners.
                        - Implement the user registration and login functionality with proper authentication mechanisms.
                        - Develop the browsing, searching, and filtering features for customers to explore shops and products.
                        <p></p>
                        3. **Backend Development:**
                        - Build the logic for adding, updating, and removing products from shop inventories.
                        - Implement shopping cart functionalities, including adding/removing items, calculating totals, and managing quantities.
                        - Develop the checkout process, integrating secure payment gateways.
                        - Create mechanisms to track order history, order statuses, and delivery tracking.
                        <p></p>
                        4. **User Authentication and Authorization:**
                        - Implement authentication for user login and registration.
                        - Set up authorization rules to control access to specific features based on user roles (customer, administrator, shop owner).
                        <p></p>
                        5. **Communication Channels:**
                        - Develop communication features, such as notifications, announcements, and messages, for administrators, shop owners, and customers.
                        <p></p>
                        6. **Reporting and Analytics:**
                        - Create tools for generating reports and visualizing data related to foot traffic, sales trends, and performance metrics.
                        - Provide dashboards for administrators and shop owners to monitor their respective areas.
                        <p></p>

                        7. **Inventory Management:**
                        - Implement inventory management features for shop owners to add, update, and remove products.
                        - Develop mechanisms to manage product availability and stock levels.
                        <p></p>

                        8. **Order Management:**
                        - Build features for shop owners to process orders, update order statuses, and manage stock levels.
                        <p></p>

                        9. **Promotions and Discounts:**
                        - Create a system for shop owners to manage promotions, discounts, and sales campaigns.
                        <p></p>

                        10. **Security and Privacy:**
                        - Implement data encryption for sensitive information, especially in payment transactions.
                        - Follow best practices for securing user data and preventing unauthorized access.
                        <p></p>

                        11. **Scalability and Performance:**
                        - Design your system architecture to handle high user loads and traffic efficiently.
                        - Optimize database queries and API endpoints for improved performance.
                        <p></p>

                        12. **Testing and Quality Assurance:**
                        - Conduct thorough testing, including unit testing, integration testing, and user acceptance testing.
                        - Address any bugs or issues identified during testing.
                        <p></p>

                        13. **User Experience (UX) and Design:**
                        - Prioritize user experience to ensure that the system is easy to navigate and use.
                        - Maintain a consistent and visually appealing design across the platform.
                        <p></p>

                        14. **Documentation and Support:**
                        - Provide comprehensive documentation for users, administrators, and shop owners.
                        - Offer customer support channels for addressing user inquiries and issues.
                        <p></p>

                        Remember to continuously iterate, gather user feedback, and make improvements to your system based on real-world usage. Good luck with your shopping mall management system project!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
