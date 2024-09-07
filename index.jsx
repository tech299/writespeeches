<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Speech Writing Guide</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .card {
      border: 1px solid #ccc;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    .tabs {
      display: flex;
      cursor: pointer;
    }
    .tab-content {
      display: none;
    }
    .active {
      display: block;
    }
    .tooltip {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 300px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 10px;
      position: absolute;
      z-index: 1;
      bottom: 125%; /* Position above the text */
      left: 50%;
      margin-left: -150px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Congressional Debate: Bill Analysis and Speech Writing Guide</h1>

    <button onclick="togglePurpose()">Show/Hide Guide Purpose</button>

    <div id="guidePurpose" class="card" style="display: none;">
      <strong>Purpose of this Guide</strong>
      <p>This interactive guide demonstrates how to analyze a sample bill and craft a compelling speech for Congressional Debate.</p>
    </div>

    <div class="tabs">
      <button onclick="openTab(event, 'bill')">Sample Bill & Interpretation</button>
      <button onclick="openTab(event, 'speech')">Model Speech Analysis</button>
    </div>

    <div id="bill" class="tab-content">
      <div class="card">
        <h2>Sample Bill: A Resolution to Suspend Turkey's Veto Power in NATO</h2>
        <p>Hover over clauses to see explanations:</p>
        <p class="tooltip">WHEREAS, Turkey threatens to exploit their veto power;<span class="tooltiptext">Explanation: This clause accuses Turkey of using their veto power in NATO for self-serving purposes.</span></p>
        <p class="tooltip">WHEREAS, It is hindering NATO's ethics and effectiveness;<span class="tooltiptext">Explanation: This clause highlights how Turkey's actions undermine the ethical and operational standards of NATO.</span></p>
        <p class="tooltip">WHEREAS, There's been numerous examples of Turkey blocking NATO actions for leverage;<span class="tooltiptext">Explanation: This section provides evidence of Turkey's repeated obstruction within NATO.</span></p>
        <p class="tooltip">WHEREAS, They haven't been held accountable for several abuses against the Kurdish people;<span class="tooltiptext">Explanation: Turkey's human rights abuses, particularly against the Kurdish population, are introduced as a significant issue.</span></p>
        <p class="tooltip">RESOLVED, That the Congress here assembled recommends the suspension of Turkey's VETO power.<span class="tooltiptext">Explanation: The bill concludes with a recommendation to suspend Turkey's veto power.</span></p>
      </div>
    </div>

    <div id="speech" class="tab-content">
      <div class="card">
        <h2>Model Speech Analysis</h2>
        <p>This exemplary speech demonstrates effective argumentation and persuasive techniques.</p>
        <p>Turkey is no longer a reliable ally but a rogue actor working against the very values NATO was built to defend.</p>
        <p>Turkey under President Erdogan has strayed far from these principles.</p>
        <p>How can we sit here and continue to claim we are a united alliance of democracies when one of our own members is actively dismantling democracy within its borders?</p>
      </div>
    </div>

  </div>

  <script>
    function togglePurpose() {
      const purpose = document.getElementById("guidePurpose");
      purpose.style.display = (purpose.style.display === "none" || purpose.style.display === "") ? "block" : "none";
    }

    function openTab(evt, tabName) {
      const tabContents = document.getElementsByClassName("tab-content");
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
      }

      const tabLinks = document.getElementsByClassName("tab-link");
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    document.getElementById("bill").style.display = "block"; // Default tab to show
  </script>
</body>
</html>
