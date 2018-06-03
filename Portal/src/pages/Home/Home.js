import React, {Component} from 'react';
import { Button, Carousel, Row, Col } from 'antd';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }
    
    render() {
        return (
            <div id='hero-page'>
                <Row id='hero'>
                    <Col>
                    <div className='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
                    <div className='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
                    <div className='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
                    <div className='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
                    <div className='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
                    <div className='layer-4 layer' data-depth='1.00' data-type='parallax'></div>
                    </Col>
                </Row>
                <Row id='hero-mobile'></Row>
                <Row id='content'>
                    <Col className='container'>
                        <section className='first-section'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too, that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically an excellent one.</p>
                                <p>It may seem ridiculous, but it reminded me of General Washington's head, as seen in the popular busts of him. It had the same long regularly graded retreating slope from above the brows, which were likewise very projecting, like two long promontories thickly wooded on top. Queequeg was George Washington cannibalistically developed.</p>
                                <p>Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the storm from the casement, he never heeded my presence, never troubled himself with so much as a single glance; but appeared wholly occupied with counting the pages of the marvellous book. Considering how sociably we had been sleeping together the night previous, and especially considering the affectionate arm I had found thrown over me upon waking in the morning, I thought this indifference of his very strange. But savages are strange beings; at times you do not know exactly how to take them.</p>
                                </div>
                                <div className='col-sm-6'>
                                <p>At first they are overawing; their calm self-collectedness of simplicity seems a Socratic wisdom. I had noticed also that Queequeg never consorted at all, or but very little, with the other seamen in the inn. He made no advances whatever; appeared to have no desire to enlarge the circle of his acquaintances. All this struck me as mighty singular; yet, upon second thoughts, there was something almost sublime in it. Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is—which was the only way he could get there—thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself.</p>
                                <p>Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is—which was the only way he could get there—thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself. Surely this was a touch of fine philosophy; though no doubt he had never heard there was such a thing as that.</p>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
        )
    }
}

