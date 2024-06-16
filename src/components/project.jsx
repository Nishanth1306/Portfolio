import React from 'react'

export default function project() {
  return (
    <div>
        <div className="projects-overview">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>Smart Street Light</h3>
            <p>The Smart Street Light System is an innovative solution designed to enhance energy efficiency and safety in urban environments.</p><p> By integrating temperature and light intensity sensors, the system ensures optimal street lighting while conserving energy.</p><p>
<strong>Temperature Sensors:</strong> Monitor ambient temperature to adjust the lighting levels.</p>
<p><strong>Light Intensity Sensors:</strong> Detect the level of natural light to control the street lights accordingly.</p>
<p><strong>Automatic Dimming and Brightening:</strong> Based on sensor data, the lights automatically dim or brighten, ensuring energy is used only when necessary.</p>
          </div>
          <div className="project-item">
            <h3>Smart Pole</h3>
            <p>Smart Pole is the new model of street light, where various devices like wifi modems, cameras, LED displays, and emergency SOS are integrated to improve the safety of the public. This can increase the lives of the public by providing for all their needs in public places and increasing their security in public areas.
             <br></br><br></br><strong>
Energy Efficiency:</strong> Equipped with LED lights and smart sensors, these poles adjust brightness based on ambient light and pedestrian activity, reducing energy consumption.
<br></br><p><strong>Remote Management:</strong> Centralized control systems allow city officials to monitor and manage lighting in real-time, identifying and resolving issues swiftly.
</p><p><strong>Surveillance Cameras:</strong> Integrated cameras enhance security by providing high-resolution footage, aiding in crime prevention and investigation.
</p></p>
          </div>
          <div className="project-item">
            <h3>Fault Detection in the Street Light</h3>
            <p>The fault in the street lights will be identified automatically, and an alert notification will be sent to the control room to resolve the fault.</p><p> This reduces the time delay in finding out the fault manually. We have used various sensors for predicting faults like pole faults, light intensity faults, and power faults using the Lux sensor, tilt sensor, voltage sensor, and current sensor</p><p>For the prototype model, we also installed a GSM module with ESP 8266 to send the SMS. We have also made the output available to display in the Output Data section of the Thingspeak website.</p><p>
We have also built a user-friendly website for the technician to locate the fault.</p>
          </div>
          <div className="project-item">
            <h3>Task Manager</h3>
            <p>This is an Task Managing Application, where user can add their task , remove or also can edit the Entered Task</p>
          </div>
          <div className="project-item">
            <h3>Students Mark Portal</h3>
            <p>This is a web application, where the users can enter the mark of student and maintain thier DataBase in the web-Application</p>
          </div>
          <div className="project-item">
            <h3>Expense Tracker</h3>
            <p>Expense Tracker is an innovative financial management tool designed to help users efficiently monitor and manage their personal and business expenses. With an intuitive interface and powerful features, the Expense Tracker enables users to gain complete control over their finances, ensuring better budgeting, saving, and spending habits.</p><p>
            <b>User-Friendly Interface:</b> The Expense Tracker offers a clean and intuitive interface that allows users to easily input, categorize, and review their expenses.<p><b>Categorization and Tagging:</b> Expenses can be categorized and tagged, making it easy to see where money is being spent and to identify patterns in spending habits.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
