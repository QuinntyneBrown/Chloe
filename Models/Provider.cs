using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Provider: BaseEntity
    {
        public Provider()
        {
            this.Bundles = new HashSet<Bundle>();
            this.Brands = new HashSet<Brand>();
        }

        public ICollection<Bundle> Bundles { get; set; }
        public ICollection<Brand> Brands { get; set; }
    }
}
