import React, { useEffect } from 'react';
import './prettify.css';
import './base.css';

const CoverageReport = () => {
  useEffect(() => {
    // Ensure the prettyPrint function runs on component mount
    if (window.prettyPrint) {
      window.prettyPrint();
    }
  }, []);

  return (
    <div>
      <head>
        <title>Code coverage report for tailor-my-resume/db.js</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="../prettify.css" />
        <link rel="stylesheet" href="../base.css" />
        <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          {`
            .coverage-summary .sorter {
              background-image: url(../sort-arrow-sprite.png);
            }
          `}
        </style>
      </head>

      <body>
        <div className="wrapper">
          <div className="pad1">
            <h1>
              <a href="../index.html">All files</a> /{' '}
              <a href="index.html">tailor-my-resume</a> db.js
            </h1>
            <div className="clearfix">
              <div className="fl pad1y space-right2">
                <span className="strong">85.71% </span>
                <span className="quiet">Statements</span>
                <span className="fraction">12/14</span>
              </div>

              <div className="fl pad1y space-right2">
                <span className="strong">50% </span>
                <span className="quiet">Branches</span>
                <span className="fraction">2/4</span>
              </div>

              <div className="fl pad1y space-right2">
                <span className="strong">100% </span>
                <span className="quiet">Functions</span>
                <span className="fraction">2/2</span>
              </div>

              <div className="fl pad1y space-right2">
                <span className="strong">85.71% </span>
                <span className="quiet">Lines</span>
                <span className="fraction">12/14</span>
              </div>
            </div>
            <p className="quiet">
              Press <em>n</em> or <em>j</em> to go to the next uncovered block,{' '}
              <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
            </p>
            <div className="quiet">
              Filter:
              <input type="search" id="fileSearch" />
            </div>
          </div>
          <div className="status-line high"></div>
          <pre>
            <table className="coverage">
              <tbody>
                <tr>
                  <td className="line-count quiet">
                    <a name="L1"></a>
                    <a href="#L1">1</a>
                    <a name="L2"></a>
                    <a href="#L2">2</a>
                    <a name="L3"></a>
                    <a href="#L3">3</a>
                    <a name="L4"></a>
                    <a href="#L4">4</a>
                    <a name="L5"></a>
                    <a href="#L5">5</a>
                    <a name="L6"></a>
                    <a href="#L6">6</a>
                    <a name="L7"></a>
                    <a href="#L7">7</a>
                    <a name="L8"></a>
                    <a href="#L8">8</a>
                    <a name="L9"></a>
                    <a href="#L9">9</a>
                    <a name="L10"></a>
                    <a href="#L10">10</a>
                    <a name="L11"></a>
                    <a href="#L11">11</a>
                    <a name="L12"></a>
                    <a href="#L12">12</a>
                    <a name="L13"></a>
                    <a href="#L13">13</a>
                    <a name="L14"></a>
                    <a href="#L14">14</a>
                    <a name="L15"></a>
                    <a href="#L15">15</a>
                    <a name="L16"></a>
                    <a href="#L16">16</a>
                    <a name="L17"></a>
                    <a href="#L17">17</a>
                    <a name="L18"></a>
                    <a href="#L18">18</a>
                    <a name="L19"></a>
                    <a href="#L19">19</a>
                    <a name="L20"></a>
                    <a href="#L20">20</a>
                    <a name="L21"></a>
                    <a href="#L21">21</a>
                    <a name="L22"></a>
                    <a href="#L22">22</a>
                    <a name="L23"></a>
                    <a href="#L23">23</a>
                    <a name="L24"></a>
                    <a href="#L24">24</a>
                    <a name="L25"></a>
                    <a href="#L25">25</a>
                    <a name="L26"></a>
                    <a href="#L26">26</a>
                    <a name="L27"></a>
                    <a href="#L27">27</a>
                    <a name="L28"></a>
                    <a href="#L28">28</a>
                    <a name="L29"></a>
                    <a href="#L29">29</a>
                    <a name="L30"></a>
                    <a href="#L30">30</a>
                    <a name="L31"></a>
                    <a href="#L31">31</a>
                    <a name="L32"></a>
                    <a href="#L32">32</a>
                  </td>
                  <td className="line-coverage quiet">
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-no">&nbsp;</span>
                    <span className="cline-any cline-no">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-yes">2x</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                    <span className="cline-any cline-neutral">&nbsp;</span>
                  </td>
                  <td className="text">
                    <pre className="prettyprint lang-js">
                      {`import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
const setup = () => {
  const testUri = process.env.MONGODB_URI_TEST;
  const prodUri = process.env.MONGODB_URI_PROD;
  const uri = process.env.NODE_ENV === "test" ? testUri : prodUri;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
};

export default setup;`}
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
        <script src="../prettify.js"></script>
        <script>
          {`window.onload = function() {
            prettyPrint();
          }`}
        </script>
      </body>
    </div>
  );
};

export default CoverageReport;
