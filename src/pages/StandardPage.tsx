import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./StandardPage.css";

export interface IStandardPageProps {
  title: string;
  content: any;
}

export default class StandardPage extends React.Component<IStandardPageProps> {
  public render() {
    return (
      <div className="StandardPage">
        <Header />
        <h1>{this.props.title}</h1>
        {this.props.content}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
