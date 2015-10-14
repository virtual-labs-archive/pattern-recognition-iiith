package MyPackage;

import java.awt.Font;
import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.event.ChartProgressEvent;
import org.jfree.chart.event.ChartProgressListener;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.title.LegendTitle;
import org.jfree.data.xy.XYSeriesCollection;

public class Chart1
  extends JFreeChart
  implements ChartProgressListener
{
  private Point2D prev;
  
  Chart1(XYSeriesCollection xyDataset, String f1, String f2)
  {
    super(ChartFactory.createScatterPlot("Feature Plot", f1, f2, xyDataset, PlotOrientation.HORIZONTAL, false, false, false).getPlot());
    this.prev = new Point2D.Double(0.0D, 0.0D);
    XYPlot plot = (XYPlot)getPlot();
    getLegend().setItemFont(new Font("SansSerif", 1, 14));
    
    addProgressListener(this);
  }
  
  public void chartProgress(ChartProgressEvent event)
  {
    if (this != null) {}
  }
}
