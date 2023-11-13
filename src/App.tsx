import './App.css'
import { ChangeEvent, useState } from 'react';

function App() {
  const [numberValue, setNumberValue] = useState<number>(0);
  const [isChecked, setChecked] = useState<boolean>(false);
  const [sumValue, setSumValue] = useState<number>(0);
  const [colourClass, setColourClass] = useState<string>("red");

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    var numberValue = 0;
    if(!Number.isNaN(event.target.value))
    {
      numberValue = parseInt(event.target.value)
    }
    setNumberValue(numberValue);
    var value = calculateSum();
    setSumValue(value);
    setColourClass(getColourClass(value));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    isChecked;
    setChecked(event.target.checked);
    var value = calculateSum();
    setSumValue(value);
    setColourClass(getColourClass(value));
  }

  function calculateSum() {
      const tableRows = Array.from(document.querySelectorAll('#tableBody > tr'));
      let value = 0;

      tableRows.forEach(row => {
        const checkbox = row.querySelector<HTMLInputElement>('td:first-child input[type="checkbox"]');
        const inputValue = row.querySelector<HTMLInputElement>('td:nth-child(2) input') || row.querySelector('td:nth-child(2)');

        if (checkbox && checkbox.checked) {
          value += Number(inputValue?.textContent || inputValue?.value);
        }
      });

      setSumValue(value);
      return value;
  }

  function getColourClass(value:number){
    if(value < 750){return "red"}
    return "green"
  }

  return (
    <>
      <h1>Guild Wars 2 MagicFind Checklist</h1>
      <table id="mainTable">
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          <tr><td colSpan={5} className='category'>Account</td></tr>
          <tr>
            <td><input type="checkbox" disabled={true} checked={true} /></td>
            <td><input id="accountBonusValue" type="number" value={numberValue} min="0" max="350" placeholder="0" onChange={handleNumberChange} /></td>
            <td><img src="https://wiki.guildwars2.com/images/9/94/Magic_Find_%28account_bonus%29.png" /></td>
            <td><a href="https://wiki.guildwars2.com/images/e/e9/Account_Bonuses.jpg">Account Bonuses</a><p>Magic Find value from Hero Panel [H]</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Festival</td></tr>
          <tr>
            <td><input id="test" type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">15</td>
            <td><img src="https://wiki.guildwars2.com/images/f/f1/Memories_of_Home.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Memories_of_Home">Memories of Home</a><p>Active during Lunar New Year festival</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Preparations</td></tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">20</td>
            <td><img src="https://wiki.guildwars2.com/images/1/11/Magical_Infusion.png" /><img src="https://wiki.guildwars2.com/images/9/9c/Otter%27s_Blessing_Enrichment.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Magical_Enrichment">Magical Enrichment</a> / <a href="https://wiki.guildwars2.com/wiki/Otter%27s_Blessing_Enrichment">Otter's Blessing Enrichment</a><p>Enrichtment (Amulet)</p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">10</td>
            <td><img src="https://wiki.guildwars2.com/images/e/ee/Endless_Toymaker%27s_Tonic.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Guild_Magic_Find">Guild Magic Find</a><p>Guild Tavern</p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">10</td>
            <td><img src="https://wiki.guildwars2.com/images/f/fa/Enlightenment.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Enlightenment">Enlightenment</a><p>Buff from completing <a href="https://wiki.guildwars2.com/wiki/Monastery_Training">Monastery Training</a> Renown Heart</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Map Event Bonuses</td></tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">200</td>
            <td><img src="https://wiki.guildwars2.com/images/7/7f/Perseverance.png" /><img src="https://wiki.guildwars2.com/images/7/74/Hero_of_the_Wastes.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Perseverance">Perseverance</a> & <a href="https://wiki.guildwars2.com/wiki/Hero_of_the_Wastes">Hero of the Wastes</a><p>Silverwastes Buffs: 5 x 30% + 50%</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Banners</td></tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">15</td>
            <td><img src="https://wiki.guildwars2.com/images/c/c6/Guild_Magic_Find_Banner_Boost.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Guild_Magic_Find_Banner_Boost">Guild Magic Find Banner Boost</a><p>Guild Gold and Magic Find Banner / Guild Heroes Banner / Guild Anniversary Banner</p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">10</td>
            <td><img src="https://wiki.guildwars2.com/images/9/9d/Spirit_Banner.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Spirit_Banner_Boost">Spirit Banner Boost</a><p>Spirit Banner</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Consumables (most available at Trading Post)</td></tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">40</td>
            <td><img src="https://wiki.guildwars2.com/images/e/eb/Longevity_Noodles.png" /><img src="https://wiki.guildwars2.com/images/8/8a/Chocolate_Omnomberry_Cream.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Longevity_Noodles">Longevity Noodles</a> / <a href="https://wiki.guildwars2.com/wiki/Chocolate_Omnomberry_Cream">Chocolate Omnomberry Cream</a><p>Noodles (during Lunar New Year), Chocolate Cream (with active boons)</p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">30</td>
            <td><img src="https://wiki.guildwars2.com/images/e/ee/Sharpening_Skull.png" /><img src="https://wiki.guildwars2.com/images/7/71/Flask_of_Pumpkin_Oil.png" /><img src="https://wiki.guildwars2.com/images/8/8f/Lump_of_Crystallized_Nougat.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Sharpening_Skull">Sharpening Skull</a> / <a href="https://wiki.guildwars2.com/wiki/Flask_of_Pumpkin_Oil">Flask of Pumpkin Oil</a> / <a href="https://wiki.guildwars2.com/wiki/Lump_of_Crystallized_Nougat">Lump of Crystallized_Nougat</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">10</td>
            <td><img src="https://wiki.guildwars2.com/images/f/f3/Lucky_Draketail.png" /><img src="https://wiki.guildwars2.com/images/7/7d/Lucky_New_Year_Firework.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Lucky_Draketail">Lucky Draketail</a> / <a href="https://wiki.guildwars2.com/wiki/Lucky_New_Year_Firework">Lucky New Year Firework</a><p>Stack duration</p></td>
          </tr>
          <tr><td colSpan={5} className='category'>Boosters (account bound)</td></tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">100</td>
            <td><img src="https://wiki.guildwars2.com/images/2/2e/Celebration_Booster.png" /><img src="https://wiki.guildwars2.com/images/2/25/Birthday_Booster.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Celebration_Booster">Celebration Booster</a> / <a href="https://wiki.guildwars2.com/wiki/Birthday_Booster">Birthday Booster</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">100</td>
            <td><img src="https://wiki.guildwars2.com/images/a/a4/Black_Lion_Booster.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Black_Lion_Booster">Black Lion Booster</a><p>Available for <a href="https://wiki.guildwars2.com/wiki/Black_Lion_Statuette">Black Lion Statuettes</a></p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">50</td>
            <td><img src="https://wiki.guildwars2.com/images/b/b6/Magic_Find_Booster.png" /><img src="https://wiki.guildwars2.com/images/4/4d/Communal_Boost_Bonfire.png" /><img src="https://wiki.guildwars2.com/images/3/3e/Dragon%27s_Fortune_Fireworks.png" /><img src="https://wiki.guildwars2.com/images/9/9d/Hallows_Fortune_Fireworks.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Magic_Find_Booster">Magic Find Booster</a> / <a href="https://wiki.guildwars2.com/wiki/Communal_Boost_Bonfire">Communal Boost Bonfire</a> / <a href="https://wiki.guildwars2.com/wiki/Dragon%27s_Fortune_Fireworks">Dragon's Fortune Fireworks</a> / <a href="https://wiki.guildwars2.com/wiki/Hallows_Fortune_Fireworks">Hallows Fortune Fireworks</a><p>Bonfires and Fireworks can buff multiple people</p></td>
          </tr>
          <tr>
            <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
            <td className="value">50</td>
            <td><img src="https://wiki.guildwars2.com/images/b/b6/Magic_Find_Booster.png" /><img src="https://wiki.guildwars2.com/images/8/82/Heroic_Booster.png" /><img src="https://wiki.guildwars2.com/images/f/ff/Enchanted_Reward_Boost.png" /></td>
            <td><a href="https://wiki.guildwars2.com/wiki/Item_Booster">Item Booster</a> / <a href="https://wiki.guildwars2.com/wiki/Heroic_Booster">Heroic Booster</a> / <a href="https://wiki.guildwars2.com/wiki/Enchanted_Reward_Boost">Enchanted Reward Boost</a></td>
          </tr>
          <tr>
            <td colSpan={5} id="copyright">© henahax.de 2023</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className={colourClass} id="sumValue">{sumValue}</td>
            <td colSpan={3}>% of up to 750%</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default App
