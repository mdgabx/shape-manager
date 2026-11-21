import "./styles.css";


const Main = () => {
    return (
        <div className="container">
            <div className="text-center mb-8">
                <h1>Shape Manager</h1>
                <p className="subtitle">Calculate areas of geometric shapes</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Shape Calculator</h2>
                </div>
                <div className="card-content">
                    <div className="form-group">
                        <label htmlFor="shape-type" className="label">Shape Type</label>
                        <select id="shape-type" className="select">
                            <option value="">Select shape type</option>
                            <option value="circle">Circle</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="triangle">Triangle</option>
                        </select>
                    </div>

                    <div id="property-inputs">

                        <div id="circle-props" className="htmlForm-group hidden">
                            <label htmlFor="radius" className="label">Radius</label>
                            <input
                                type="number"
                                min="0"
                                id="radius"
                                placeholder="Enter radius"
                                className="input"
                            />
                        </div>

                        <div id="rectangle-props" className="form-grid hidden">
                            <div className="form-group">
                                <label htmlFor="width" className="label">Width</label>
                                <input
                                    type="number"
                                    min="0"
                                    id="width"
                                    placeholder="Width"
                                    className="input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="height" className="label">Height</label>
                                <input
                                    type="number"
                                    min="0"
                                    id="height"
                                    placeholder="Height"
                                    className="input"
                                />
                            </div>
                        </div>

                        <div id="triangle-props" className="form-grid hidden">
                            <div className="form-group">
                                <label htmlFor="base" className="label">Base</label>
                                <input
                                    type="number"
                                    min="0"
                                    id="base"
                                    placeholder="Base"
                                    className="input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="triangle-height" className="label">Height</label>
                                <input
                                    type="number"
                                    min="0"
                                    id="triangle-height"
                                    placeholder="Height"
                                    className="input triangle-height"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="result-card" className="card">
                <div className="card-content result-card-content">
                    <div id="result-text"></div>
                    <div className="result-area"></div>
                </div>
            </div>
        </div>
    )
}

export default Main;