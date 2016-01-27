using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Brand: BaseEntity
    {
        public Brand()
        {
            this.Providers = new HashSet<Provider>();
            this.Pages = new HashSet<Page>();
        }

        public ICollection<Provider> Providers { get; set;  }
        public ICollection<Page> Pages { get; set; }

    }
}
