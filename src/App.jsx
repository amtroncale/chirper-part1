import React, { Component } from 'react';

class App extends Component {
        state = {
            user: <u>This user has chirped:</u>,
            value: '',
            chirps: [],
        }
    

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    addChirp = (event) => {
        event.preventDefault();
        const newChirp = this.state.chirps.slice()
        newChirp.unshift(this.state.value);
        this.setState({ value: '', chirps: newChirp });
    };

    render() {
        return (
            <>
                <section className="header">
                    <div className="jumbotron jumbotron-fluid header shadow-lg py-4">
                        <div className="container text-center align-middle">
                            <h1 className="display-8"><strong>C H I R P E R</strong></h1>
                            <p className="lead justify-center"><u>C H I R P I N G =></u></p>
                            <img src="https://lafeber.com/pet-birds/wp-content/uploads/2013/06/African-Grey.jpg" className="rounded mx-auto d-block" alt="..."></img>
                        </div>
                    </div>
                    <br />
                </section>
                <section className="newChirp">
                    <div className="container">
                        <section className="row justify-content-center">
                            <article className="col-md-10">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">CHIRP NOW:</h5>
                                        <form className="form-group">
                                            <textarea
                                                className="shadow-lg form-control mb-2"
                                                calibri-label="With textarea"
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            />
                                            <button
                                                className="btn btn-secondary btn-md btn-outline-light btn-shadow-lg"
                                                onClick={this.addChirp}
                                            >Chirped yet?</button>
                                        </form>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </section>
                <hr />
                <section className="timeline">
                    <main className="container">
                        <section className="row justify-content-center">
                            <>
                                {this.state.chirps.map(chirp => {
                                    return (
                                        <div className="col-lg-12">
                                            <div className="card mb-3">
                                                <div className="card-body shadow-lg">
                                                    <h5 className="card-title">{this.state.user}</h5>
                                                    <p className="card-text">{chirp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            <div className="col-lg-12">
                                <div className="card mb-3">
                                    <div className="card-body shadow-lg">
                                        <h5 className="card-title">{this.state.user}</h5>
                                        <p className="card-text">Paul Byrd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card mb-3">
                                    <div className="card-body shadow-lg">
                                        <h5 className="card-title">{this.state.user}</h5>
                                        <p className="card-text">Goose Gossage</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
            </>
        )
    }
};

export default App;