import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SidebarNav.module.scss';
import pathes from '../../Router/pathes';
import sprite from '../../Sprite/symbol-defs.svg';

export default function SidebarNav() {
  return (
    <aside className={style.sidebar}>
      {/* <nav> */}
      <div className={style.user}>
        <div className={style.userPhoto}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQTERcSERQSFxcXFxcXFxQXFxIXFxcXGBcYGBcXFxcbICwkGx0rHhcXJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISGjIpIiQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQcEBgIDBQj/xABAEAABAwIDBQUECQMCBwEAAAABAAIDBBEFEiEGBzFBURMiYXGBFDKRoSMzQlJicrHB0YLh8ENjJTVzkrLS8ST/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAYF/8QAMREAAgEDAwIDBwQCAwAAAAAAAAECAwQRBSExEkEUIlEGE2FxkaHwI0KBwTLhM7HR/9oADAMBAAIRAxEAPwCmURSAgIXcyEnwXdFT21K71OCrZ0CnAXYIx0C5IrEZOOUdFyARFICIiAIiIAiIgCIiAIiIAiIgCgt8lKIDjkHQLg6Bviu1EBiPpyOC6CF6d11SRh3mq9JZMwUXJzbGxXFVJCIiALMgjsLniumBlz5LLVkQyVClFJUIiKQEREBClFlUuHyzWEUb5Pygm3nyUSajy/rsDEXJbXRbAVr2gljWeDib/Jd8u7msaL/Ru8i5arv7ZS6feLJf3cvQ0xFm4jhU9O608T2fiIOX4rDAN7AG55DUn0WzGSksrgrxtjcKFsuEbFVlQL9n2bdLOkuOPQL327qZrd6qjv0DbrTqalbU5dMprJZU5PfBXaLdsR3bVcTS6N8ctgTZoId5ALT6mlkieWSMexw+y4WKzULqlcLNOWSHCSOlEUrYKkIpUIAiIgJXFSiEHXLHmHisIiy9ErGqWc1VosmY6hSiqWMumHdXcuEY7oXNXRUIiKSAiIgChSR048lsmxWzhrajv/VM1kOov0aLc1jrVI0oOUnsiVFt4RnbG7Fvq/pp8zIgQMhBBlHgeQVuYfh8UDBHBG2NoFrAfvzXZZkUdtGsY30DAFW+0u8c96OhDhYkGVwGvixq46dS61SpintD7fX1N1KFJb8lkVFVHGPpJI2D8TgFhR7QUbnZWVMBPTMOKoOvr5J355pHPJ5uP+WXr7JbLPrpO7ZkbDd8hvqL+623NbktBpUqblUqYx3x+ZKK5lJ4SLwrqKOoj7OVjZGHkdfUFeNg2x9JTHOyMPkubPfc2HIAFe5TwNjY2Nt8rW2F14G32LS0lCZacgPL2szEXsCvDt51ZTVvSm8N/L6md9OMtHq4jjEEDbzTMZb7Jtc26Ba1LvKomusBO7xaG2/VVBU1Ukry+Rxe4m5cSuu66aj7P0UvPJt/RGs7mXZF+4NtPS1ZtE8Z+THEB/oOZWPthsyythOgbM0EsktqSB7ptyVHU9Q6J7JGEtewhzSOoN9fBX3stjIraVs1i13B45ZhxseYXnX9jLT5KvSk8Z3yXp1PerDKCkjcxxY8EOBsQRY38QuKtPbjYaWpqPaaQR5ngCRjjl1H2gbeS1Gq2Er2C7oBb8L2u/hdDb6jQrQT6kn6GvKk4vg1pQu2ppnxuyyMe0+II+fBdV1vpprKMb2CKSoUE4CIikgldczbtK7FBCgIwMqLu7NEwWMkDgpXEcFKFQiIpAREATZbshkgX0110043PC3qr62OwcUlGyO3eeO0f5nWyp/Y7DhU18UTvdzFzvJoJHzAV+SPDWlx4NBdfwAXM+0FfaNvF7s27aO3UVvvUx9zMtHE62YZpfU6NuqwcP7LNxeudUVEkztc73EeAucqwwF7djbK2oKml8/mYKknN5OcELpHtjbq55DR5k2V+7K4QKSkigHEC7/F7tXG/rb0VU7uMP7ava53CIZ/1AVt7Q4mKallmPJpt+Z2g+a8LXasqlSNrB+jfz7GxQiknMwGbTxuxFtCwZu4XPdyDhc2B+C6t4lOH4bK3oWu9cwWgbsA6TEzI4k2Y57neLlZu1hHsM1+GT91p3FCFpd0ow57l4S6otlADkluVlF+nRbJsPgBraoBw+iis6U9eOVvxC6+tVjRg5S7I0orqZlbI7FyVb2ySdyBpGY3s5442arjo6VkMbY42hrW6ZR/PVHujhiJNmRxMJPINa0ak/BVrT7TTYliUUcBe2CN4kDRo5zWkXL+o8FyNWdfVJOWcQh+fU3IqNEs95y3J0AGp8F009ZHJ9XIx3hmH6LA2pq+yopnk8WOb4XcCAqAje5puxzmu6tJH6LDpuk+MpSl1Ywyatbo2wfRtfh8U7DHLGxwPUC/oVV+1m790IM1Hd8YuXxuPeb+W/ELG2e3gTQFscxMsWgJdftB/Ktmgr46iJs0TszHAWPifsuCzvxelzzzB/QZhVW3J85FpGhXFb3vO2ebTyMqYmERykiQfdfoQQOQOvwWi9B5rq7a5jcUlUj3NOUXF7kIiLOVChclCgHHIi5IhYIiKSoREQBAiKPgDfN0tJesklP2IiB5khb3t5VmHDZnj3rBo9SFrG6KPuTv55gL+gXq71n2w0jrKwei5G7/AFtUUX8Dcp7USmgNPJQpRdf2NMsPc9b2io6hgt5XW07y4nvw14YHE52Egaki4VY7G417HVtkd7jiGyfl6q9IZI5mB7C2RjhoRZzSPJclqqnb3kbhrMVg3KGJQ6WaXux2ffDG+qlaWSS90MPKMWsfjdZG9DERFh5jBGeV7Wgc8oNyfktqrKyOFhfK5rGAaEkAEjkP4VHbY4+a6pLxdsbO6wE8hxPqVSxp1b+78TNeWO/+hNqnTcUeABy8dD4K3N0tOG0kr+b5bHyAFlUYCs/dHiLcktK5wDi4PjBPvC2tvKxXt61CUrOTiYbd4kmd29bGXxxspGaCVpdIfw9FG6vAyxjqx17yDIwHk0HVy2baHZeGtkiklLgYjrb7Tb3ynwXoV1XDRwZnlkcbG91nC9uDWjxXPeMi7RW1uvNLkz9HncpGo72MRaykbACM8jwSOYA1uqjuvV2ixh9ZUunfcX0azk0DgPNeUuo0208NQUHya1WXW8hbtu0x4wVHszj9HM7mfdeBoR5/stJXNjy0hzCQRYgjkVnr0I1qTpyWclYS6Wj6Fx7Dm1FLLE/7TTY9HW0IXz1LC6NxY8atuPUKyYt5jBTZXRPMoZluCMpNrZlW88zpHF7tS4lxPmvJ0W1r28ZQqLZPYzV5KTyjrREXumuQpREAREQBERAEREAREUdwWtugP/55h/uD/wAQs7euz/hzT/ut/QryN0MthPH45vk0L3N6cd8MefuvYVyNbbV4/NG6v+LBSyIV2U1O+SRsbGlz3GzW66/DguuckkmzRT7Y3OtehQY1UwDLBPJG3kwG4HWwKsLAt2cZjaa5zi4gERxuyhvgTzK9o7ucOt9XIPHtZf8A2XjXGsWibhJdX8Jr7s2FQm90VBX4pPPpPLJJbUBxOUHrl4XWF6K0cZ3Yxlt6KRwcNcspLmnwB6quMQoZIJDHIxzHjlY3d5dVvWt5b1kvdNbduDHOElyYxK7aWqkie2SF7mPZq1zeXh5La8C3fVVQGyPcIozY2N8xHlyW3Uu7CiA7753nnZwaPkFhr6na0n0Tln5blo0Zy3NWZvJrezyEML7W7TS/mRay1fE8YqKp2apkdJbgCe6D4NGitifdpQ5Tk7ZjrGzu0cdfEEquNqNlpaF4Lu9E42bIAfgVgsbmxqz/AElh/FLP9lqkKiW72PBJPMqE8EXsfDkwZyERFO/pgEk+fxKj/PJER7kBERCQiIgCIiAhFKICEUogIXI8FCIDeN09RaufH9+IkeYIVhbc0/aYbOwccoI9CFUmwtYIcShkPAlzT/U0/vZXpUwiSN7Dwc1w+Wi5DWF7m9p1V3x9jcobwwfNebS56fFW9u02cbFAKt4DpJRdv4G+HiqlliLHPYeLXOb8DZbThG3lVT07adjY3BgtG83zN/le9qVKrWo9FJ4ya9KSUty09o9pYaFn0pJefcjbYknx6Ku37z6ztC5sdP2d9GEOuB4m/FaxTslr6trHvJklfq4nQczYchZe1tjsYaGNsjZO0jJDSdMwd8OF1oW+m2dt00qm85fmxllVnLLjwWTs1tVBXDuXZKBZ0btNBzb1XrVWHRSSNkfG1z2e64jh4Ec1Uu6/DHS1vam+SFpudRdx5X+CuUDmF4Wp0adpcONGTWV/2Z6PmjlmLiOIRU8Zkme1jRrrxI8AtMr959MDaGKV5HAnKGnyFwVqG8l8pr3tlcS0C8Y5BvkvEwLB5a2YQw2BPvOdfK0WJv8AJexZ6NbRoqtWeW1n0MEq0s4iWXgO8Vk87Ipouz7RwYxw4ZjoA7XyW3YthzKinfDIPfaQPwuto5UntFs3NhskbpHMdmIc1zL+8zUcfJXZhNZ28Ecw/wBRoPw0WjqVvRodFxbcNmSk3PMZcnz9NQSMkMTmOL2mzmtBLr+nhZepBsjWyNzsgNvxGx+CvUU0bXmQMZmd7zsoufFSyoZmyCRubkMzbn0Wy9fqtfpUs45/PQr4dLlnznV0kkb+zkY5juQcCPh1C6Fe+2GAsrKZwy/SsF43cCLcr81RT2EEtPEEg+Y0Xs6dfxvIOSWGuTBUp9LOCIFK9ExkIpRAQilEBCKUQBERAEREAREQHOKQse144tc0/AhfR9FOHxRvB95jT8Rqvm1XZu1rzNh7cx1jcWH9vkue9oaOaKn6M2LZ+bBWu3WHGCvlbbR57QcveJK11WRvfpCJIZwOIMZPlqLqt16mn1/eW0JvssGKccSM3BsRdTVEc7ACY3Xt1HAgrYtr9tTXxMhERjaHBx7wcS7kNOXBajdens3Q+0VcUQGmcOPk0i6vXo00/fTjvHhkRcsOKLi2Fwk0lDGxw77yZHngSXcB8LLPpMailqZKWN2Z8TQ53TU8F3YpWNgp5JHEAMYbedrN/ZVfurmc/EpXuJJdEXG/i+645W/i4VrmfK3X8m91dHTAyt8EFpqeQW7zXNPjbXVa5sbtH7DOZHMzseMrgDYgC+o+K3HfEz6GB3MPf8wFVi6PTYxuLFKfG6NWq+mobRtvtSMQfGGRlkcd7XNySea3jdvjkRomwPkY2SO4yucAbciLqnx5H4r18GwCsqQZKWF72j7YIaD4Aki58Fku7ChK3VHiMeN+/wDJEZy6upG/be7aMZH7PSSAvPvyNNw0dARzVa0VW9kzJA52YOGtyTqeZXTU08kUjo5Wua8GzmO4glepsjh3tVZFHxF8zz0a3/AslG2o2lu0uMZb9diJSlOSL+hJLQeoB9SF8+bTRhlfUNHDtnei+g3PDGlxNmtFyTwAAXzpi1T2lTNJ9+VxHle37LxfZ2Lc6kl/i/8A0z3PCRiKERdUagREQBERAEREARSiAhFKICEUqFAQut/3T4nkqX0pPdlaXC5+2LafC60ELKwqudTzxzM4seHeh0PyK17yh7+jOm+6LQl0yLr26w72jD5bC74252dbt429AqJBvqvpSJ7ZI2u4skYP+1wVA7U4d7PWyxWsM5LOmV3eFvjZeH7P18KVGXK/GZ7mP7keSty3Vxh2Ja/ZjcVpw4Lc91D7YkR1id+69nUM+GmvgYaa8yN13oT5MNcBpnkY30uCtV3RQH2qaSxsIsl/HMCth3uf8vZ/1hf4KN09GWULpXDWWQ2/KNP2XN05xhpMvVtr7my1msjC3wP+ip2nm93wACq1WLvim+mpo/usc746KuV7mjwcLSOfi/uYKzzJs5Nbc2HEkAefAL6D2YofZqOGJotlbd3LU8SVRWA03aVlPF96aO/kHgn5BfQtTM1jHyO91jC49bNHBeb7Q1W/d0od9zLbRW7ZqG2WxYrHCaJ4ZLwdcaPHK56rK2N2SbQtL5HB8r9HECwDejVh0u82icLubIw+IusXFt5UAjLaRj3SHg5wytHotJU9RnTVu15fX4F+qnnqMreTj7Yac07D9LKLWB1azmSOV/2VOBZFZVyTSOlldme8kuPLyWOumsbJWlJU+/c1ak+uWQilFulCEUogIRSiAhFKICEREAREQBERQCQVB/t6Iil7vI+Jc+7PEzPRZHm7onZD+S2nyXk72sLLmRVLB7t2vPgeB/Ra9u4xn2er7Nx7k1mk9HfZ+dgrbxrDxUU0tO7/AFGlo/NbT5rkLnNjqKqY2luzdj+pTwfOo/z0XubFYgIK+J7tA7uH+o2XkVlK+GR8L/fjcWH+k2uuoH5EHxBHNdXUjGrScc7NGmn0svzazBPbaUwZg0lzXhx4AAi/yXo4bSMgiZFGCGsaB681oGzu8eNsLY60PMjdO0a24IHC4HOy44/vKa6MsomODjoZJBoAeNguNlpt40rbp8uc5N1VYLfuavt/iXb18ljdsf0bT5HVa0uTnEklxuSSSevMlcSV2VKkqNOMM8I0pPLZuu63De0rDNyhF/VwIC33eDW9jh0lvt9wf1XBWNu2wg09GHu4zHtD1y8gvF3uV4yRUwPezdo4eHJcrVl4vVFHlR/r/ZtpdNIrJx5LjZTzRddnJpcEIpUISn2CIiAIiIAiIgCIiAKFI4DyRAEREAREQBQpRAcmvLSC02cLEHoRqFfeyGLtqqSJ4N3hobJ4PaLX9bKglt27zH/Zans3/VSkNcSdGu4A2+C8rWLTxFu3FZkuDLRn0yPa3pYBZ4rI2+8bSgcjbR3yVcWX0hWUrJo3xyAOZI2x56EcQqE2lwV1HVPgOYtBvG77zLaHz5ei19EvlUp+5n/lH8+xe4p90eSiIvdTeeeTX5JC9PZ3DjU1cUFrh7xnP3Wt1PyC8wfJWpurwMsjdVyN1k0jJ4hgHvDzuQtK/ulb0JVP3cIyUo9UsI3+NjY2Bo0bG2w6WaP7Khtr8W9rrZZWnue6zyH91bG3uMCloni9pJmmNnUAiznDyBKowLx/Z+2eJV5ct7GW4l+1BERdKawREQBERAEREAULkiA43RQiARnQLkuqnPdXYgJREQBERAEREAQHpp4qFN044JRbG7za0SMbR1BAkjAbHIT9YOQ15hbJtTs9HXRdm/uvGrZABcEcvJUNHIWua5pIc03B6EHQhW9sPtoyojENS7LO0WzuIDZBfQj8X8LmNS0+VCfirfK7s2qVRSXTIrDHMGlo5DHM06e6+xyu8ivOt/8AOa+isUwqKqj7OoY17eI5EHqD1WlybsIS67Jntbf3cpOnS91sWuvUujFXyyKTt3nMTQdmMCfWVDY2g5OMknFrW9D4lXxTQtijbG2zWRtAB4ANA4lY2D4NDSR9nAwNGmY83EcyVpW8Ta4MY6jpnXc8ESvaQQ1v3R48V5lzWnqtwqdNeRd/7MsYqlHL5NR26x01lU4D6uJxYzXQ8i79VrSknly/b+Uuuto040qahFcbGm31MhERZSqCIiEhERAEREARFxlNmlQEdOZFj50Vcljtp32NllLzwVmxSZh4qUw0dqhQpVioREQBERAEREIJ/wAsjTYi19OFtLeqhSVDxjcnBuGA7wKmCzJvpY28AbB3o9bVFvSpSO/FO09AAbqpEXn1dJtq8upxMqqzRve0e8WSdhjpQYmHQk2LyPLktGcSSbnibnz6k9VwUrat7elbrpprBRycuSFKIs5UIiIAiIgChSoQHJEUIWIXRUv5Lue7KLlYT3XN1VshI4IiKpYLk19jcLiiAzo5A7zXYvOBWQyo5FTkhoyUXBkoPNclYqSiKUJwQiKVJAUKUQghFKKGsk5IRSinJBCKUQkhFKICFKhEBKLioc8DiVAJUPeBxXS+o6LHc8nioySkcpJC4rrRFUsEREAREQBSERAAshihFYg7xxXMIikhhERCoREQBERAEREAREQBERAQVBREJOqVY7+KIoZY4qERVJCIiAIiID//2Q=="
            alt=""
          />
        </div>
        <div className={style.userName}>Marcel Newman</div>
      </div>
      <ul className={style.navList}>
        <li className={style.navListItem}>
          <NavLink
            exact
            to={pathes.home}
            className={style.navLink}
            activeClassName={style.navLinkActive}
          >
            <svg className={style.svg}>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
            Пациенты
          </NavLink>
        </li>
        <li className={style.navListItem}>
          <NavLink
            to={pathes.statictic}
            className={style.navLink}
            activeClassName={style.navLinkActive}
          >
            <svg className={style.svg}>
              <use href={`${sprite}#icon-stats`}></use>
            </svg>
            Статистика
          </NavLink>
        </li>
        <li className={style.navListItem}>
          <NavLink
            to={pathes.addPatient}
            className={style.navLink}
            activeClassName={style.navLinkActive}
          >
            <svg className={style.svg}>
              <use href={`${sprite}#icon-add`}></use>
            </svg>
            Добавить пациента
          </NavLink>
        </li>
      </ul>
      {/* </nav> */}
    </aside>
  );
}
