"use client";
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" value="123@#$asd" id="wd-text-fields-password" />
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" placeholder="Doe"
                value="Wonderland"
                title="The last name"
                id="wd-text-fields-last-name" />
            {/* copy rest of form elements here  */}
        </form>
        </div>
 <h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good"
   onClick={() => alert("Life is Good!")}
      type="button">
  Hello World!
</button>


        <button type="button">
   Delete
</button>
<button type="button">
   Edit
</button>
<button type="submit">
   Update
</button>
<h5>File upload</h5>
<input id="wd-upload" type="file"/>

<h5 id="wd-buttons">Buttons</h5>

<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>
<h5>Select one</h5>
<label htmlFor="wd-select-one-genre">
    Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>
<h5>Select many</h5>
<label htmlFor="wd-select-many-genre">
Favorite all movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-salary-start">
Starting salary:</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating">
Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>
    <label htmlFor="wd-text-fields-email">
Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-dob">
Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      value="2000-01-21"/><br/>
      

        <h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
<div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q3</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>90</td>
              
            </tr>
          </tfoot>
          
        </table>
        <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q4</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>75</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>80</td>
            </tr>
          </tfoot>
        </table>
<table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q5</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>34</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>80</td>
            </tr>
          </tfoot>
        </table>
         <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q6</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>62</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>78</td>
            </tr>
          </tfoot>
        </table>
         <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q7</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>90</td>
            </tr>
          </tfoot>
        </table>
         <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q8</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>32</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>10</td>
            </tr>
          </tfoot>
        </table>
         <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q9</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>100</td>
            </tr>
          </tfoot>
        </table>
<table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q10</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>100</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>30</td>
            </tr>
          </tfoot>
        </table>

      </div>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <p>
            Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </p>    
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>  
      </div>
      <h2>My favorite books (in no particular order)</h2>
<ul>
   <li>Dune</li>
   <li>Lord of the Rings</li>
   <li>Red Mars</li>
</ul>
<h2>How to make Pancakes</h2>
<ol>
   <li>Mix dry ingredients.</li>
   <li>Add wet ingredients.</li>
   <li>Stir to combine. 2</li>
   <li>Heat a skillet or griddle.</li>
   <li>Pour batter onto the skillet.</li>
   <li>Cook until bubbly on top.</li>
   <li>Flip and cook the other side.</li>
   <li>Serve and enjoy!</li>
</ol>
      <div id="wd-p-tag">
  <h4>Paragraph Tag</h4>
    <p id="wd-p-1">
              <p id="wd-p-2">
 This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
</p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
</p>
<p id="wd-p-4">

This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
</p>
  </p>
  <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet: <br />
  <img id="wd-starship" width="400px"   src="https://media.wired.com/photos/611ffa5d042dfa2291227da2/3:2/w_2560%2Cc_limit/Gear-Tesla-Bot.jpg" />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="/images/web1_Starship-gap2.jpg" height="200px" /></div>
</div>
<h2 id="toc">Table of Contents</h2>
      <ul>
        <li><a href="#section1">Jump to Section 1</a></li>
        <li><a href="#section2">Jump to Section 2</a></li>
      </ul>

      <h1 id="section1">Section 1</h1>
      <p>This is section 1 content. Hash navigation scrolls here.</p>
      <a href="#wd-lab1">Back to TOC</a>

      <h2 id="section2">Section 2</h2>
      <p>This is section 2 content. Hash navigation scrolls here.</p>
      <a href="#wd-h-tag">Heading</a>

      <h2>External Links (for Pranav Gupta)</h2>
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/Optimus_(robot)" target="_blank">Wikipedia (Optimus)</a></li>
        <li><a href="https://github.com/PranavGupta26" target="_blank">My GitHub</a></li>
        <li><a href="profile.html">See my profile</a></li>
        <li><a href="mailto:pranav@example.com">Email me</a></li>
        <li><a href="tel:+123456789">Call me</a></li>
      </ul>
      
    </div>
);}
