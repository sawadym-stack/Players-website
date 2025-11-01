import Card from "./Card.jsx";

// import {Link} from 'react-router-dom'
import neymarPic from "./assets/neymarpsg.jpg";
import messiPic from "./assets/messipic.png";
import ronaldoPic from "./assets/ronaldopic.png";
import mbappePic from "./assets/mbappepic.png";
import yamalPic from "./assets/yamalPic.png";
import ronaldoNazarioPic from "./assets/nazariopic.png";
import zidanePic from "./assets/zidane.png";
import pelePic from "./assets/pele.png";
import ronaldinhoPic from "./assets/ronaldhinho.png";
import halandPic from "./assets/haland.png";
import rashfordPic from "./assets/rashford.png";
import raphinhaPic from "./assets/raphinha.png";
import dimariaPic from "./assets/dimaria.png";
import balePic from "./assets/bale.png";
import benzemaPic from "./assets/benzema.png";

function App() {
  return (
    <>
      <Card
        image={neymarPic}
        name="Neymar jr "
        text="The prince who never became king"
        link='https://www.google.com/search?q=neymar&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifObW5jgtNRo5uOsg4eRDnrJsBSVOA%3A1762003599798&ei=jwoGadmzMN-O4-EP1b-KkAg&gs_ssp=eJzj4tLP1TcwzjU1NDQ0YPRiy0utzE0sAgA0sQWF&oq=Ney&gs_lp=Egxnd3Mtd2l6LXNlcnAiA05leSoCCAAyChAuGIAEGCcYigUyBBAjGCcyChAjGIAEGCcYigUyBBAjGCcyCxAAGIAEGJECGIoFMg4QLhiABBiRAhixAxiKBTINEAAYgAQYsQMYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTIIEC4YgAQYsQMyCxAuGIAEGMcBGK8BMhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAUiaOVCJCVjlKHACeAGQAQSYAeEBoAGgFKoBBjAuMTUuMrgBAcgBAPgBAZgCDKAC5SKoAhPCAgoQABiwAxjWBBhHwgIFEAAY7wXCAgoQABiABBgUGIcCwgIFEAAYgATCAggQABiABBixA8ICDhAAGIAEGJECGLEDGIoFwgILEAAYgAQYsQMYgwHCAg0QLhiABBgnGIoFGOoCwgINECMYgAQYJxiKBRjqAsICBxAjGCcY6gLCAhQQABiABBiRAhi0AhiKBRjqAtgBAcICEBAAGAMYtAIY6gIYjwHYAQHCAgoQABiABBhDGIoFwgILEC4YgAQYkQIYigWYAwnxBW5LIrhxcQwZiAYBkAYIugYGCAEQARgUkgcJMi43LjEuNy0yoAeL6gGyBwUwLjcuMbgH4gnCBwcwLjEuOS4yyAdF&sclient=gws-wiz-serp'
      />
      <Card
        image={messiPic}
        name="Messi"
        text="The completed football player in the history"
        link='https://www.google.com/search?q=messi&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifOc09DQS3FOeNYH2suESUZnxed6AQ%3A1762003609423&ei=mQoGaam-GZSQ4-EPkZqg4As&gs_ssp=eJzj4tTP1TcwK8xKTzZg9GLNTS0uzgQAMf8Fiw&oq=mess&gs_lp=Egxnd3Mtd2l6LXNlcnAiBG1lc3MqAggKMgQQIxgnMhAQIxjwBRiABBgnGMkCGIoFMhAQLhiABBixAxhDGMkDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMh8QLhiABBixAxhDGMkDGIoFGJcFGNwEGN4EGN8E2AEBSM0jUIMDWLoVcAJ4AZABBJgBpgKgAf0NqgEFMC42LjO4AQHIAQD4AQGYAgigAuwTqAISwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIKEC4YgAQYJxiKBcICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIIEAAYgAQYsQPCAhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAcICDRAjGIAEGCcYigUY6gLCAg0QLhiABBgnGIoFGOoCwgITEC4YgAQY0QMYxwEYJxiKBRjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAgoQLhiABBhDGIoFwgIFEC4YgATCAgUQABiABMICDRAuGIAEGLEDGEMYigXCAg0QLhiABBhDGMkDGIoFmAMI8QVUTvzc8zBIA4gGAZAGE7oGBggBEAEYCZIHCzIuNC4wLjEuNy0xoAeluQGyBwcwLjQuMC4xuAeDCMIHBzAuMS41LjLIBzA&sclient=gws-wiz-serp'
      />
      <Card
        image={ronaldoPic}
        name="Cristiano Ronaldo"
        text="The man who raised his country in his shoulder"
        link='https://www.google.com/search?q=cristiano+ronaldo&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifOEflJhI1bdEt1gRqqTVbYPstsG_w%3A1762003655735&ei=xwoGaZPOLJb0g8UPv-WEmAg&gs_ssp=eJzj4tTP1TcwqigxKzRg9BJMLsosLslMzMtXKMrPS8xJyQcAkaUKOw&oq=cr&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmNyKgIIAzIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTINEC4YgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjfBNgBAUirJFC7A1iJEHACeAGQAQOYAcACoAGqCaoBBzAuNC4xLjG4AQHIAQD4AQGYAgagAoUYqAIQwgIHECMYsAMYJ8ICDRAjGPAFGLADGCcYyQLCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDRAuGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAg0QLhiABBgnGMkDGIoFwgIEECMYJ8ICEBAjGPAFGIAEGCcYyQIYigXCAgsQABiABBiSAxiKBcICCxAAGIAEGLEDGJIDwgINEAAYgAQYsQMYFBiHAsICBRAAGIAEwgIIEAAYgAQYsQPCAg0QABiABBixAxhDGIoFwgIaEC4YgAQYyQMYigUYlwUY3AQY3gQY3wTYAQHCAg0QLhiABBgnGIoFGOoCwgINECMYgAQYJxiKBRjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhAQLhiABBjRAxjHARgnGIoFwgIKEC4YgAQYQxiKBcICCxAAGIAEGLEDGIMBmAMM8QUf0iPH3iUeD4gGAZAGE7oGBggBEAEYCZIHCzIuMS4xLjEuOC0xoAf9fbIHBzAuMS4xLjG4B6cFwgcHMC4xLjQuMcgHJQ&sclient=gws-wiz-serp'
      />
      <Card
        image={mbappePic}
        name="Mbappe"
        text="The man who give his all for his second world cup 2022"
        link='https://www.google.com/search?q=mbappe&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifMYkuPPasjgv3q10daIRfSzJkoQBw%3A1762003738910&ei=GgsGabWhN6eE4-EP3OeIuA8&gs_ssp=eJzj4tVP1zc0TKowNY03Ky8wYPRiy01KLChIBQBPPwb1&oq=MB&gs_lp=Egxnd3Mtd2l6LXNlcnAiAk1CKgIIADIKEC4YgAQYJxiKBTIKECMYgAQYJxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIIEC4YgAQYsQMyDhAuGIAEGLEDGIMBGIoFMhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAUj8OFD2AljYGnACeAGQAQSYAaMBoAGLDaoBBDAuMTO4AQPIAQD4AQGYAgmgAr0wqAIPwgIKEAAYsAMY1gQYR8ICDRAuGIAEGLADGEMYigXCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgINEAAYgAQYsQMYQxiKBcICCBAAGIAEGLEDwgINEAAYgAQYsQMYFBiHAsICBRAAGIAEwgINEC4YgAQYJxiKBRjqAsICDRAjGIAEGCcYigUY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIKEC4YgAQYQxiKBcICBRAuGIAEwgIdEC4YgAQYsQMYgwEYigUYlwUY3AQY3gQY4ATYAQGYAwjxBd8VG6Q_A672iAYBkAYSugYGCAEQARgJkgcLMi41LjctMS4wLjGgB9rqAbIHAzAuNbgH7QXCBwcwLjEuNS4zyAc-&sclient=gws-wiz-serp'
      />
      <Card
        image={yamalPic}
        name="Lamine yamal"
        text="The teenager making hopes for barcelona"
        link='https://www.google.com/search?q=yamal&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifMTIU2GllktLmLD42S5eRay31-B2w%3A1762004288980&ei=QA0GaZq4O8XF4-EPhsHMyA0&ved=0ahUKEwia2PK9idGQAxXF4jgGHYYgE9kQ4dUDCBE&uact=5&oq=yamal&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXlhbWFsMhAQIxjwBRiABBgnGMkCGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMggQABiABBixAzIFEAAYgAQyBRAAGIAESJEfUKgSWMQYcAF4AZABAJgB4QGgAcoGqgEFMC4zLjK4AQPIAQD4AQGYAgagAu8GqAIKwgINEC4YgAQYJxiKBRjqAsICDRAjGIAEGCcYigUY6gLCAgoQIxiABBgnGIoFwgIKEC4YgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYigXCAg4QLhiABBixAxiDARiKBcICChAuGIAEGEMYigXCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABJgDBfEFROLKS6BtspmSBwUxLjMuMqAHi22yBwUwLjMuMrgH6gbCBwMyLTbIBx0&sclient=gws-wiz-serp'
      />
      <Card
        image={ronaldoNazarioPic}
        name="Ronaldo Nazario"
        text="The best sriker in football history"
        link='https://www.google.com/search?q=nazario+ronaldo&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifMFmDwouLziBkTkgEvMkCe1gbluOw%3A1762004188000&ei=2wwGad3mPNWd4-EPh7Ts0Ao&gs_ssp=eJzj4tDP1TfIyCgsN2D04s9LrEosysxXKMrPS8xJyQcAedQJUw&oq=naza&gs_lp=Egxnd3Mtd2l6LXNlcnAiBG5hemEqAggAMgoQLhiABBhDGIoFMggQABiABBixAzIIEC4YgAQYsQMyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyDhAuGIAEGLEDGNEDGMcBSKkcUPACWKEScAJ4AZABApgBggKgAccJqgEFMC42LjG4AQPIAQD4AQGYAgegAssHqAIKwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgoQLhiABBgnGIoFwgIQECMY8AUYgAQYJxjJAhiKBcICChAAGIAEGEMYigXCAgoQABiABBgUGIcCwgINEC4YgAQYsQMYQxiKBcICDhAuGIAEGLEDGIMBGIoFwgINEC4YgAQYJxiKBRjqAsICDRAjGIAEGCcYigUY6gLCAgQQIxgnwgIKECMYgAQYJxiKBcICEBAuGIAEGLEDGEMYgwEYigXCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgUQLhiABMICCxAuGIAEGLEDGNQCmAMG8QUwhD_rz_SLO4gGAZAGCZIHBTIuNC4xoAfRrwGyBwUwLjQuMbgHvwfCBwUwLjEuNsgHIg&sclient=gws-wiz-serp'
      />
      <Card 
      image={zidanePic} 
      name="Zidane " 
      text="The Midfield maestro"
      link='https://www.google.com/search?q=zidane&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifNV8ffe349X9q22aG9MH3g2-O7hXg%3A1762004206890&ei=7gwGaaqJNsuK4-EPk9erkAY&gs_ssp=eJzj4tDP1TfITi4zMWD0YqvKTEnMSwUAMaQFgg&oq=zid&gs_lp=Egxnd3Mtd2l6LXNlcnAiA3ppZCoCCAAyDRAuGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAAGIAEMggQABiABBixA0iAHFD5CVi6EHABeAGQAQCYAagBoAHXA6oBAzAuM7gBAcgBAPgBAZgCBKAC7wOoAgrCAg0QLhiABBgnGIoFGOoCwgINECMYgAQYJxiKBRjqAsICChAuGIAEGCcYigXCAgoQLhiABBhDGIoFwgIOEAAYgAQYsQMYgwEYigXCAggQLhiABBixA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYkQIYigWYAwfxBQhzkXQHjuk1kgcDMS4zoAe5O7IHAzAuM7gH6APCBwMyLTTIBxM&sclient=gws-wiz-serp' />
      
      <Card
        image={pelePic}
        name="Pele"
        text="The historical player of brazil who won 3 world cups"
        link='https://www.google.com/search?q=pel%C3%A9&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifPhcP1sM3kBr4NtCbL9W8ptqStBuw%3A1762004172395&ei=zAwGacHmF4vz4-EPismwwQU&gs_ssp=eJzj4tDP1TcwM0-PN2D0Yi1IzTm8EgApOQVu&oq=pe&gs_lp=Egxnd3Mtd2l6LXNlcnAiAnBlKgIIATIQECMY8AUYgAQYJxjJAhiKBTIKEC4YgAQYQxiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBUioHlDuBlieDHABeAGQAQCYAf4BoAHBA6oBBTAuMS4xuAEDyAEA-AEBmAIDoALaA6gCCsICDRAuGIAEGCcYigUY6gLCAg0QIxiABBgnGIoFGOoCwgIKECMYgAQYJxiKBcICEBAuGIAEGLEDGEMYgwEYigXCAgUQABiABMICDhAAGIAEGLEDGIMBGIoFmAMK8QXNpKLoTV_X5JIHBTEuMC4yoAffQLIHAzItMrgHzwPCBwUyLTIuMcgHFA&sclient=gws-wiz-serp'
      />
      <Card
        image={ronaldinhoPic}
        name="Ronaldinho"
        text="The player with insane movment"
        link='https://www.google.com/search?q=ronaldinho&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifPLPCN9bU3tLHO-PXz2WmlkBTzsPA%3A1762004153709&ei=uQwGaf3yKpuY4-EPo_-uiAk&gs_ssp=eJzj4tTP1TcwykkrNzVg9OIqys9LzEnJzMvIBwBRagdy&oq=ronald&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnJvbmFsZCoCCAQyChAjGPAFGCcYyQIyChAjGIAEGCcYigUyChAjGIAEGCcYigUyDRAuGIAEGLEDGEMYigUyDRAuGIAEGLEDGEMYigUyDRAuGIAEGLEDGEMYigUyChAAGIAEGBQYhwIyCBAAGIAEGLEDMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFSKwoUN8JWL8TcAF4AZABAJgB6gGgAekGqgEFMC41LjG4AQPIAQD4AQGYAgegApAHqAIKwgINEC4YgAQYJxiKBRjqAsICDRAjGIAEGCcYigUY6gLCAgoQLhiABBgnGIoFwgIKEC4YgAQYQxiKBcICBRAAGIAEwgIOEC4YgAQYsQMYgwEYigXCAgoQABiABBhDGIoFmAMG8QXBa5amkUcqD5IHBTEuNS4xoAeWzgGyBwUwLjUuMbgHigfCBwUwLjEuNsgHHQ&sclient=gws-wiz-serp'
      />
      <Card
        image={halandPic}
        name="Haland"
        text="The goal machine of man city"
        link='https://www.google.com/search?q=halland&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifPTVCMCAlps-fS3qU3mk5iEvW5jdQ%3A1762004140278&ei=rAwGaerPEKWb4-EP15T04AY&gs_ssp=eJzj4tVP1zc0TDarjK_MMTU0YPRiz0jMyUnMSwEAV0IHUQ&oq=hal&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2hhbCoCCAAyChAuGIAEGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyChAuGIAEGEMYigUyCxAAGIAEGLEDGIMBMgoQABiABBhDGIoFMgsQABiABBixAxiDATINEC4YgAQYQxjUAhiKBTINEC4YgAQYQxjUAhiKBTIOEAAYgAQYsQMYgwEYigUyDhAAGIAEGLEDGIMBGIoFSO0XUOIFWKQJcAF4AZABAJgBiQGgAYwDqgEDMC4zuAEDyAEA-AEBmAIEoAKmA6gCCsICDRAuGIAEGCcYigUY6gLCAg0QIxiABBgnGIoFGOoCwgIKECMYgAQYJxiKBcICEBAjGPAFGIAEGCcYyQIYigXCAgQQIxgnwgIOEC4YgAQYsQMYgwEYigXCAgUQLhiABJgDBfEF04QN8bqmmpCSBwMxLjOgB9F5sgcDMC4zuAehA8IHAzItNMgHFQ&sclient=gws-wiz-serp'
      />
      <Card
        image={rashfordPic}
        name="Marcus Rashford"
        text="The man who trying to be back in his prime with Barcelona"
        link='https://www.google.com/search?q=rashford&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifMRv3ia0H-Z9fyQMQfjjjNdRq-Ipg%3A1762004122919&ei=mgwGacLqN7Ka4-EPjpmIyA4&gs_ssp=eJzj4tVP1zc0TCqvjDcwMbAwYPTiKEoszkjLL0oBAFyVB5g&oq=rash&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHJhc2gqAggBMhAQIxjwBRiABBgnGMkCGIoFMg0QLhiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMggQLhiABBixAzIIEC4YgAQYsQMyDhAAGIAEGLEDGIMBGIoFMgUQABiABEiAIlCiAljQEXABeAGQAQCYAeIBoAHyCqoBBTAuNi4yuAEDyAEA-AEBmAIGoAK7B8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEC4YgAQYJxiKBcICDRAAGIAEGLEDGEMYigXCAggQABiABBixA8ICBRAuGIAEwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigWYAwCIBgGQBgmSBwUxLjMuMqAH1q0BsgcFMC4zLjK4B7YHwgcFMi01LjHIByQ&sclient=gws-wiz-serp'
      />
      <Card
        image={raphinhaPic}
        name="Raphinha"
        text="The player who carried barcelona from their bad season to best season"
        link='https://www.google.com/search?q=raphinha&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifMog8Dn8fV5xnljjhAPDAT0BY5dAg%3A1762004099340&ei=gwwGad_HFMmGjuMPyOGmsQs&gs_ssp=eJzj4tVP1zc0TDYrsUjLyLIwYPTiKEosyMjMy0gEAF5dB8I&oq=raph&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHJhcGgqAggBMhAQIxjwBRiABBgnGMkCGIoFMg0QLhiABBixAxhDGIoFMg4QABiABBiRAhixAxiKBTINEAAYgAQYsQMYQxiKBTINEC4YgAQYsQMYQxiKBTIKEC4YgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYFBiHAjIKEC4YgAQYFBiHAjIKEC4YgAQYQxiKBUjAIlDRCVjUEnABeAGQAQCYAbABoAHSBKoBAzAuNLgBA8gBAPgBAZgCBaAC8wSoAgrCAg0QLhiABBgnGIoFGOoCwgINECMYgAQYJxiKBRjqAsICChAjGIAEGCcYigXCAgoQLhiABBgnGIoFwgIKECMY8AUYJxjJAsICChAAGIAEGEMYigXCAgUQABiABMICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQYkQIYigXCAgsQABiABBiRAhiKBZgDB_EFpFC0EbL36MaSBwMxLjSgB5OCAbIHAzAuNLgH6wTCBwUwLjEuNMgHGQ&sclient=gws-wiz-serp'
      />
      <Card
        image={dimariaPic}
        name="Angel Dimaria"
        text="The man who deliver his carrier with most best players,Messi,Ronaldo,Neymar etc.."
        link='https://www.google.com/search?q=dimariya&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifPkSCv4PMkjvbwGOdZOQmELh6jeGg%3A1762004082949&ei=cgwGaaLaOY3a4-EPrb2hkQs&gs_ssp=eJzj4tLP1TcwMi_IKzcyYPTiSMnMTSzKrEwEAEgNBtM&oq=dimar&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWRpbWFyKgIIATIQECMY8AUYgAQYJxjJAhiKBTILEC4YgAQYkQIYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQABiABDIQEC4YgAQY0QMYQxjHARiKBTIFEAAYgAQyBxAAGIAEGAoyBRAAGIAEMgUQABiABEj5IVCBBli1FXACeAGQAQCYAdwBoAG2CKoBBTAuNS4xuAEByAEA-AEBmAIIoALoCKgCCsICDRAuGIAEGCcYigUY6gLCAg0QIxiABBgnGIoFGOoCwgIKECMYgAQYJxiKBcICEBAuGIAEGNEDGMcBGCcYigXCAgoQABiABBhDGIoFwgIEECMYJ8ICDhAuGIAEGLEDGIMBGIoFwgIOEAAYgAQYsQMYgwEYigXCAhEQLhiABBiRAhixAxiDARiKBcICDhAuGIAEGJECGLEDGIoFwgINEAAYgAQYsQMYQxiKBcICCBAuGIAEGLEDwgIIEAAYgAQYsQOYAwbxBXGw9EiuS7d_kgcFMi41LjGgB7vLAbIHBTAuNS4xuAfbCMIHBTAuMS43yAcn&sclient=gws-wiz-serp'
      />
      <Card
        image={balePic}
        name="Gareth Bale"
        text="The man who deliver his carrier with most best players,Messi,Ronaldo,Neymar etc.."
        link='https://www.google.com/search?q=bale+football+player&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifOCk0BGIdNP6PGm0vxqgj9ODncCDg%3A1762004052040&ei=VAwGabueAoeb4-EPiP2byAk&gs_ssp=eJzj4tTP1TdIsSyqjDdg9BJJSsxJVUjLzy8BMnIUCnISK1OLALCrCzk&oq=bale&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGJhbGUqAggIMhAQIxjwBRiABBgnGMkCGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMggQABiABBixAzIFEC4YgAQyChAAGIAEGEMYigVIqilQwANYsBNwAXgBkAEBmAHkAaABiAqqAQUwLjcuMbgBAcgBAPgBAZgCBqAChgbCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAuGIAEGCcYigXCAg0QABiABBixAxgUGIcCwgIFEAAYgATCAgoQIxiABBgnGIoFwgIKEC4YgAQYQxiKBcICCBAuGIAEGLEDmAMAiAYBkAYLkgcDMS41oAeFkwGyBwMwLjW4B4IGwgcDMi02yAce&sclient=gws-wiz-serp'
      />
      <Card
        image={benzemaPic}
        name="Karim Benzema"
        text="The man who deliver his carrier with most best players,Messi,Ronaldo,Neymar etc.."
        link='https://www.google.com/search?q=benzema&sca_esv=6fc980339ac54f7c&sxsrf=AE3TifNQJQl05e7HMmnR8D0i0G9YsRmNtw%3A1762003959359&ei=9wsGae3QFca74-EP7Ymw6Q0&gs_ssp=eJzj4tTP1TdITknPNTVg9GJPSs2rSs1NBAA-EwZD&oq=ben&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2JlbioCCAEyEBAjGPAFGIAEGCcYyQIYigUyChAuGIAEGEMYigUyDRAuGIAEGLEDGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAuGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigVI0CNQiwNY0BFwAngBkAEEmAG8AaAB4gmqAQMwLji4AQPIAQD4AQGYAgagAq0FqAIKwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICChAuGIAEGCcYigXCAg0QABiABBixAxhDGIoFwgINEAAYgAQYsQMYFBiHAsICChAAGIAEGBQYhwLCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEAAYgATCAg0QLhiABBgnGIoFGOoCwgINECMYgAQYJxiKBRjqAsICBRAuGIAEwgIEECMYJ5gDBvEFoS6oFKRCdiGIBgGQBgySBwMyLjSgB-TVAbIHAzAuNLgHogXCBwMyLTbIBx8&sclient=gws-wiz-serp'
      />
    </>
  );
}

export default App;
