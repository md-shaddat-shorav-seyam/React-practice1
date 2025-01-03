import React from "react";

function Nav(){

    return(

        <nav>
        <div>
          <span>Figma Developer</span>
        </div>
        <div class="hyp">
          <ul class="un">
            <li>Compare APIs</li>
            <li class="pa1">
              Plugin APIs <img src="arr.png" height="12px" width="12px" alt="" />
              <div class="ch1">
                <ul>
                  <li>Guide</li>
                  <li>Api Reference</li>
                  <li>Updates</li>
                </ul>
              </div>
            </li>
            <li class="pa">
              Widget APIs<img src="arr.png" height="12px" width="12px" alt="" />
            </li>
            <li>REST APIs</li>
            <li>Code connect</li>
            <li>Embeds</li>
            <li>SCIM</li>
            <li>My Apps</li>
            <li>login</li>
          </ul>
          <button type="button" class="btn">Sign up</button>
        </div>
      </nav>
  


    )
}

export default Nav