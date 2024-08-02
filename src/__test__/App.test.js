import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

// Mock components to simplify the test
jest.mock("./Component/Navbar", () => () => <div>Navbar</div>);
jest.mock("./pages/Home", () => () => <div>Home Page</div>);
jest.mock("./pages/About", () => () => <div>About Page</div>);
jest.mock("./pages/Contact", () => () => <div>Contact Page</div>);
jest.mock("./pages/Category", () => () => <div>Category Page</div>);
jest.mock("./pages/ProductFilter", () => () => <div>Product Filter Page</div>);
jest.mock("./pages/SearchHistory", () => () => <div>Search History Page</div>);
jest.mock("./Auth/Login", () => () => <div>Login Page</div>);
jest.mock("./Auth/ForgotPassword", () => () => <div>Forgot Password Page</div>);
jest.mock("./Auth/ResetPassword", () => () => <div>Reset Password Page</div>);
jest.mock("./Auth/Register", () => () => <div>Register Page</div>);
jest.mock("./Component/Footer", () => () => <div>Footer</div>);

describe("App component", () => {
  test("renders Home page by default", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("navigates to About page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/About/i));
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });

  test("navigates to Contact page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Contact/i));
    expect(screen.getByText("Contact Page")).toBeInTheDocument();
  });

  // Add similar tests for other routes
  test("navigates to Category page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Category/i));
    expect(screen.getByText("Category Page")).toBeInTheDocument();
  });

  test("navigates to ProductFilter page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Filter/i));
    expect(screen.getByText("Product Filter Page")).toBeInTheDocument();
  });

  test("navigates to SearchHistory page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/History/i));
    expect(screen.getByText("Search History Page")).toBeInTheDocument();
  });

  test("navigates to Login page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Login/i));
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  test("navigates to ForgotPassword page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Forgot Password/i));
    expect(screen.getByText("Forgot Password Page")).toBeInTheDocument();
  });

  test("navigates to ResetPassword page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Reset Password/i));
    expect(screen.getByText("Reset Password Page")).toBeInTheDocument();
  });

  test("navigates to Register page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/Register/i));
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });
});
