using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class ComponentPage
    {
        public ComponentPage()
        {

        }

        public int Id { get; set; }
        public int ComponentId { get; set; }
        public int PageId { get; set; }
        public int Index { get; set; }
        public Page Page { get; set; }
        public Component Component { get; set; }
    }
}
