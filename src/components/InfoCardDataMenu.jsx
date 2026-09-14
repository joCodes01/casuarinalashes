import React from "react";
import MenuItem from "/src/components/MenuItem.jsx";

export function InfoCardDataMenu({ title, cost, description }) {
  return (
    <div className="menu-container info-card">
      <h2 className="section-heading">Menu</h2>
      <MenuItem
        title="Eyelash extensions- classic"
        cost="120"
        description="Classic individual lashes. Natural looking bolder and longer lashes."
      />
      <MenuItem
        title="Eyelash extensions - hybrid"
        cost="150"
        description="Blend of individual classic lashes and light handmade fans with three very fine lashes. A more feathery look between classics and light volume."
      />
      <MenuItem
        title="Eyelash extensions - light volume"
        cost="160"
        description="Light handmade fans with three very fine lashes each applied to one lash. A gentle but fuller soft, fluffy finish."
      />
      <h3 className="menu-item-heading infills-h3">Lash infills</h3>

      <table>
        <tr>
          <th>Infills</th>
          <th>Up to 2 weeks </th>
          <th>2-3 weeks</th>
        </tr>
        <tr>
          <td>classic </td>
          <td>$90</td>
          <td>$105</td>
        </tr>
        <tr>
          <td>hybrid</td>
          <td>$105</td>
          <td>$125</td>
        </tr>
        <tr>
          <td>light volume</td>
          <td>$110</td>
          <td>$130</td>
        </tr>
      </table>
      <p className="infill-note">
        *Infills are available up to 3 weeks after your last appointment. After
        3 weeks, a full new set is required and will be charged at full set
        price.
      </p>

      <MenuItem title="Eyelash extensions removal" cost="40" description="" />
      <MenuItem
        title="Eyelash extension removal with a new set"
        cost="15"
        description=""
      />
      <MenuItem title="Eyelash tint" cost="30" description="" />
      <MenuItem
        title="Lash Lift/Lamination & Tint"
        cost="90"
        description="Elleeplex Profusion gentle lash lift with gentle grow out. A cysteamine system which maintains the bond integrity of the lash with no thioglycolate. 'Re-Gen' vitamin & mineral treatment included with every lift which strengthens, hydrates and protects the lashes. Re-lift every 6-8 weeks."
      />
    </div>
  );
}

export default InfoCardDataMenu;
