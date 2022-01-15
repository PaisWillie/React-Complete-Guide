import { useState } from "react";

import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(filteredYear);
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
