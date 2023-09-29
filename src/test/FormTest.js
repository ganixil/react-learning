import {render, screen} from "@testing-library/react";
import Form from "../components/Form";

test("Renders the Form heading", ()=>{
    render(<Form/>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})