using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Bundle : BaseEntity
    {
        public Bundle()
        {
            this.Providers = new HashSet<Provider>();
        }

        public ICollection<Provider> Providers { get; set; }
    }
}
