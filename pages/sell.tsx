
import Layout from '../components/Layout';
import { Component } from 'react';
import { IceCream } from '../misc/IceCream';
import GlobalContext from '../components/GlobalContext';
import SellForm from '../components/styles/SellForm';
import { Theme } from '../components/styles/Theme';
import { Mutation, ApolloProvider, MutationFunction } from 'react-apollo';
import { Query } from 'react-apollo';
import { Mutations } from '../misc/Mutations';
import gql from 'graphql-tag';
import { ApolloClient } from '../misc/ApolloClient';

export class CartState {
    constructor(
        public cart: Array<IceCream> = []
    ) { }
}

export default class Sell extends Component {

    public state = {
        name: "",
        cost: 0.00,
        image: "",
        uploading: false
    }

    public uploading: boolean = false;

    constructor(props) {
        super(props);
        const toDataURL = url => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }));
        const component = this;
        toDataURL("/ice-cream.png").then(function (result: string) {
            component.setState({
                image: result
            });
        });
    }

    public async getUploadedImage(): Promise<string> {
        //@ts-ignore
        const file = document.getElementById("imageField").files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        return new Promise(function (resolve) {
            reader.onload = function () {
                resolve(btoa(reader.result.toString()));
            };
        });
    }

    public async displayUploadedImage(event: any) {
        const image = await this.getUploadedImage();
        let imageType = "";
        if (image.indexOf("iVBOR") != -1) {
            imageType = "data:image/png;base64,";
        }
        if (image.indexOf("/9j/4AA") != -1) {
            imageType = "data:image/jpeg;base64,";
        }

        //@ts-ignore
        document.getElementById("previewImage").src = imageType + image;
    }


    public handleFormChange() {
        this.setState({
            //@ts-ignore
            name: document.getElementById("nameField").value,
            //@ts-ignore
            cost: parseFloat(document.getElementById("costField").value) * 100,
            //@ts-ignore
            image: document.getElementById("previewImage").src,
        }, function () {
            console.log(this.state);
        });
    }

    render() {
        return (
            <GlobalContext>
                <Layout>
                    {/*
                    //@ts-ignore */}
                    <Mutation mutation={Mutations.createIceCream} variables={this.state}>
                        {/*
                    //@ts-ignore */}
                        {(createIceCream, { loading, error }) => (
                            <form onSubmit={async e => {
                                e.preventDefault();
                                this.setState({
                                    uploading: true
                                });
                                try {
                                    const result = await createIceCream();
                                    console.log(result);
                                }
                                finally {
                                    this.setState({
                                        uploading: false
                                    });
                                }
                            }}>
                                <div style={{ display: 'flex', height: 'calc(100vh - 110px)', alignItems: 'center', justifyContent: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '20px', textAlign: 'center', margin: '10px 0' }}>
                                            Sell
                                    </div>
                                        <SellForm>
                                            <div>
                                                <input id="nameField" name="name       " placeholder="Name" disabled={this.state.uploading} onChange={(e) => this.handleFormChange()} value={this.state.name} />
                                            </div>
                                            <div>
                                                <input id="costField" name="cost" placeholder="Cost" type="number" disabled={this.state.uploading} onChange={(e) => this.handleFormChange()} value={this.state.cost} />
                                            </div>
                                            <div>
                                                <div style={{ margin: '10px 0 10px 0' }}>
                                                    <span>Image</span>
                                                </div>
                                                <div>
                                                    <div style={{ border: '1px solid lightgray', width: '140px', height: '120px', opacity: this.state.uploading ? '0.8' : '1' }}>
                                                        <img id="previewImage" style={{ width: '100%', height: '100%' }} src={this.state.image} />
                                                    </div>
                                                </div>
                                                <input id="imageField" name="image" placeholder="Image" type="file" onChange={(e) => this.displayUploadedImage(e) && this.handleFormChange()} disabled={this.state.uploading} />
                                            </div>
                                            {
                                                !this.state.uploading ?
                                                    (
                                                        <button type="submit" style={{ padding: '10px', width: '100%', border: 'none', cursor: 'pointer', marginTop: '14px', backgroundColor: `${Theme.accentColor}`, color: 'white', textAlign: 'center' }}>
                                                            Submit
                                                        </button>
                                                    ) :
                                                    (
                                                        <div style={{ padding: '10px', width: '100%', border: 'none', cursor: 'pointer', marginTop: '14px', backgroundColor: `${Theme.accentColor}`, opacity: '0.8', color: 'white', textAlign: 'center' }}>
                                                            Submit
                                                        </div>
                                                    )
                                            }
                                        </SellForm>
                                    </div>
                                </div>

                            </form>
                        )}
                    </Mutation>
                </Layout>
            </GlobalContext>
        )
    };
}